import { NextApiRequest, NextApiResponse } from "next";
import { createRouter as _createRouter } from "next-connect";

export type ApiError = { error: string };
export type ApiRequest = NextApiRequest & { uid: string };
export type ApiResponse<T = {}> = NextApiResponse<T | ApiError>;
export type ApiHandler<T = {}> = (
  req: ApiRequest,
  res: ApiResponse
) => unknown | Promise<unknown>;

export const createRouter = <T = {}>() =>
  _createRouter<ApiRequest, ApiResponse<T>>();

type Router<T = {}> = ReturnType<typeof createRouter<T>>;

export const createHandler = <T>(router: Router<T>) =>
  router
    .all((_, res) => res.status(405).json({ error: "Method not allowed" }))
    .handler();
