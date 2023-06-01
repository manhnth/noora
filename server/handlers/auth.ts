import { ApiHandler } from "@/server/next-connect";
import { UserLogin } from "@/types/user";

export const signup: ApiHandler = async (req, res) => {
  const { email, username, password } = req.body as UserLogin;
  res.status(200).json("hello word");
};
