import { setCookie } from 'nookies';
import { ApiMiddleWare } from '../next-connect';
import CustomApiError from '../errors/custom-api-error';

const authenticate: ApiMiddleWare = async (req, res, next) => {
  try {
    req.uid = await req.cookies['uid'];
  } catch (err) {
    setCookie({ res }, 'session', '', { maxAge: 0, path: '/' });
    throw new CustomApiError(401, 'Session cookie is invalid or has expired');
  }
};

export default authenticate;
