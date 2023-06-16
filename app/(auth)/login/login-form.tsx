'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTransition, useState } from 'react';
import { convertFormData, post_form, return_back } from '../shared';
import { Spinner } from '@/gui/atoms';
import appLogo from '@/assets/app-logo.png';
import cx from '@/lib/classix';

export default function LoginForm() {
  let [isPending, startTransition] = useTransition();
  let [err, setError] = useState('');

  const handleSubmit = async (formData: FormData) => {
    const data = convertFormData(formData);

    const error = await post_form('/api/auth/login', data);

    error ? setError(error) : return_back();
  };

  return (
    <div className="w-80 rounded-md bg-white p-6 font-medium">
      <div className="flex items-center justify-center gap-2 text-lg font-semibold text-grey-600">
        <Image src={appLogo} className="logo reddit" alt="" width={48} />
        <span>BearNote</span>
      </div>

      <form
        className="form mt-5"
        action={(formData) => startTransition(() => handleSubmit(formData))}
      >
        <div className="form_input">
          <label className="form_lbl" htmlFor="username">
            Username
          </label>
          <input
            className="m_input"
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="form_input">
          <label className="form_lbl" htmlFor="password">
            Password
          </label>
          <input
            className="m_input"
            type="password"
            name="password"
            id="password"
            placeholder="*********"
            required
          />
        </div>

        {err && <div className="form_msg -err">{err}</div>}

        <button
          className={cx('form_btn', isPending && 'pointer-events-none')}
          type="submit"
        >
          {isPending ? <Spinner /> : 'Login'}
        </button>
      </form>
      <div className="form_more justify-between px-4 font-semibold">
        <Link href="/repasswd">Forgot password?</Link>
        <Link href="/signup">
          <span className="ml-1 font-semibold text-primary-500">Sign up</span>
        </Link>
      </div>
    </div>
  );
}
