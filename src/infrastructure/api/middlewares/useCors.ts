import cors from 'cors';

const corsOptions = {
  origin: ['https://valorant-tips.vercel.app/', 'http://127.0.0.1:3000', 'http://localhost:3000'],
  optionsSuccessStatus: 200,
};
export const useCors = () => cors(corsOptions);
