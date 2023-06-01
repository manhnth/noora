import { signup } from "@/server/handlers/auth";
import { createHandler, createRouter } from "@/server/next-connect";

const router = createRouter();

router.get(signup);

export default createHandler(router);
