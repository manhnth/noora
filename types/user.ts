export type UserLogin = {
  email: string;
  username: string;
  password: string;
} & ReadableStream<Uint8Array>;
