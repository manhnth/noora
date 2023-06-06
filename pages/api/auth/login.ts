import { login } from '@/server/handlers/auth.ctrl';
import { createHandler, createRouter } from '@/server/next-connect';

const router = createRouter();

router.post(login);

export default createHandler(router);
