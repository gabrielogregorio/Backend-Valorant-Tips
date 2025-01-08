import { MONGO_URI } from '@/infrastructure/api/config/envs';
import { Log } from '@/infrastructure/api/logs';
import mongoose from 'mongoose';

export class Database {
  verbose: boolean;

  constructor({ verbose }: { verbose: boolean }) {
    this.verbose = verbose;
    mongoose.set('strictQuery', false);
  }

  private async _mongoConnect(uri: string) {
    return mongoose
      .connect(uri, {})
      .then(() => Log.info('database connected with sucess'))
      .catch((error) => {
        if (this.verbose) {
          const context = error instanceof Error ? { name: error.name, message: error.message } : {};
          Log.error('App: error on connect db', context);
        }
        throw error;
      });
  }

  public async connect() {
    await this._mongoConnect(MONGO_URI);
  }

  public async e2eTestConnect() {
    await this._mongoConnect(MONGO_URI);
  }

  public async close() {
    await mongoose.connection.close();
  }

  public async e2eDrop() {
    await mongoose.connection.db!.dropDatabase();

    this.close();
  }
}
