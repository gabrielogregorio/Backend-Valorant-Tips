type HandleUploadFilePayloadInterface = {
  buffer: Buffer;
  originalName: string;
};

type HandleUploadFileReturnInterface = {
  format: string;
  height: number;
  sizeInBytes: number;
  urlUploaded: string;
  width: number;
};

export interface HandleUploadFileInterface {
  upload(payload: HandleUploadFilePayloadInterface): Promise<HandleUploadFileReturnInterface>;
}


// ESSE TA ERRADO
