import { prisma } from '@/lib/prisma';
import { ApiHandler } from '@/server/next-connect';
import { UserLogin, UserRegister } from '@/types/user.type';
import { genSalt, hash, compare } from 'bcrypt';
import CustomApiError from '../errors/custom-api-error';
import { setCookie } from 'nookies';
import { COOKIES_AGE } from '../config/env';

export const signup: ApiHandler = async (req, res) => {
  const { email, username, password } = req.body as UserRegister;

  const user = await prisma.user.findFirst({
    where: {
      OR: [{ username }, { email }],
    },
  });

  if (user) throw new CustomApiError(409, `Email/username already exist!`);

  const salt = await genSalt(12);
  const hashedPassword = await hash(password, salt);

  const createdUser = await prisma.user.create({
    data: {
      email,
      username,
      password: hashedPassword,
    },
  });

  if (!createdUser) throw new CustomApiError(500, 'Something went wrong!');

  setCookie({ res }, 'session', createdUser.id, {
    name: 'session',
    value: createdUser.id,
    maxAge: COOKIES_AGE,
    httpOnly: true,
    path: '/',
  });

  res.status(201).json('Success! User created!');
};

export const login: ApiHandler = async (req, res) => {
  const { username, password } = req.body as UserLogin;

  const user = await prisma.user.findFirst({
    where: {
      username,
    },
  });

  if (!user) throw new CustomApiError(404, `username not found!`);

  const isPasswordMatched = await compare(password, user.password);

  if (!isPasswordMatched)
    throw new CustomApiError(401, 'Invalid authentication!');

  setCookie({ res }, 'session', user.id, {
    name: 'session',
    value: user.id,
    maxAge: COOKIES_AGE,
    httpOnly: true,
    path: '/',
  });

  res.status(201).json('Success! User created!');
};

export const logout: ApiHandler = async (_, res) => {
  setCookie({ res }, 'session', '', { maxAge: 0, path: '/' });
  res.json({});
};
