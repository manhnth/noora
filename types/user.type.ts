export type UserLogin = {
  username: string;
  password: string;
} & ReadableStream<Uint8Array>;

export type UserRegister = {
  email: string;
  username: string;
  password: string;
} & ReadableStream<Uint8Array>;

export type UserClient = {
  email: string;
  username: string;
};
