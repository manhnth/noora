import 'server-only';
import { cookies } from 'next/headers';
import { cache } from 'react';
import { prisma } from '@/lib/prisma';
import { exclude_fields } from '../utls/formatData';
import { UserClient } from '@/types/user.type';

export const getUser = cache(async (): Promise<UserClient | undefined> => {
  try {
    const sessionCookie = cookies().get('session');
    const uid = sessionCookie?.value;

    const user = await prisma.user.findUnique({ where: { id: uid } });

    if (!user) return undefined;

    return exclude_fields(user, ['password', 'id']);
  } catch (e) {
    return undefined;
  }
});
