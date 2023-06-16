import { prisma } from '@/lib/prisma';
import { ApiHandler } from '../next-connect';
import CustomApiError from '../errors/custom-api-error';
import { exclude_fields } from '../utils/formatData';

export const getUser: ApiHandler = async (req, res) => {
  const userId = req.uid;

  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });

  if (!user) throw new CustomApiError(404, 'User not found!');

  const userResp = exclude_fields(user, ['password']);

  console.log('this is user resp', userResp);

  res.status(200).json({ user: userResp });
};
