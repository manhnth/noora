type Fetch = (url: RequestInfo, options?: RequestInit) => Promise<Response>;

export class APIError extends Error {
  status: number;
  errMsg: any;

  constructor(message: string, status: number, details?: string) {
    super(message);

    this.status = status;
    this.errMsg = message;
  }
}

export const do_fetch = async (
  path: string,
  init: RequestInit,
  fetch: Fetch = globalThis.fetch
) => {
  console.log('runnn');

  const resp = await fetch(path, init);
  const type = resp.headers.get('content-type') || '';
  const data = type.includes('json') ? await resp.json() : await resp.text();

  if (resp.status < 300) return data;
  if (resp.status > 308) throw new APIError(data.error, resp.status);
};

export function api_get<T>(
  path: string,
  fetch: Fetch = globalThis.fetch
): Promise<T> {
  return do_fetch(path, { method: 'GET' }, fetch);
}

type ReqBody = Record<string, any> | string;
const json_headers = { 'Content-Type': 'application/json' };
const text_headers = { 'Content-Type': 'text/plain' };

export const api_call = (
  path: string,
  body: ReqBody,
  method: string = 'POST',
  fetch: Fetch = globalThis.fetch
) => {
  if (typeof body === 'string') {
    const init = { method, body, headers: text_headers };
    return do_fetch(path, init, fetch);
  } else {
    const init = { method, body: JSON.stringify(body), headers: json_headers };
    return do_fetch(path, init, fetch);
  }
};
