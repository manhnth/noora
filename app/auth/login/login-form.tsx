'use client';

import Link from 'next/link';
import { useTransition, useState } from 'react';
import { convertFormData, post_form, return_back } from '../shared';
import { Spinner } from '@/gui/atoms';

export default function LoginForm() {
  let [isPending, startTransition] = useTransition();
  let [err, setError] = useState('');

  const handleSubmit = async (formData: FormData) => {
    const data = convertFormData(formData);
    console.log('form data', formData, 'data', data);
    const error = await post_form('/api/auth/login', data);

    error ? setError(error) : return_back();
  };
  return (
    <div className="w-80 rounded-md bg-white p-6 font-medium">
      <div className="flex justify-center text-lg">Login</div>

      <form
        className="form mt-3"
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
            placeholder="******"
            required
          />
        </div>

        {err && <div className="form_msg -err">{err}</div>}

        <button className="form_btn" type="submit">
          {isPending ? (
            // <div className="h-6 w-6 animate-spin rounded-full border-4 border-grey-300 border-t-grey-50"></div>
            <Spinner />
          ) : (
            'Sign up'
          )}
        </button>

        <div className="form_more justify-between px-4 font-semibold">
          <Link href="/auth/repasswd">Forgot password?</Link>
          <Link href="/auth/signup">
            <span className="ml-1 font-semibold text-primary-500">Sign up</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
