'use client';

import Link from 'next/link';
import Image from 'next/image';
import appLogo from '@/assets/app-logo.png';
import { Spinner } from '@/gui/atoms';
import { useEffect, useRef, useState, useTransition } from 'react';
import { convertFormData, post_form, return_back } from '../shared';

export default function SignupForm() {
  let [isPending, startTransition] = useTransition();
  let [err, setError] = useState('');
  const abortControllerRef = useRef<AbortController>();

  const handleSubmit = async (formData: FormData) => {
    abortControllerRef.current = new AbortController();

    const data = convertFormData(formData);

    const error = await post_form('/api/auth/signup', data);

    error ? setError(error) : return_back();
  };

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  return (
    <div className="w-80 rounded-md bg-white p-6">
      <div className="flex items-center justify-center gap-2 text-lg font-semibold text-grey-600">
        <Image src={appLogo} className="logo reddit" alt="" width={48} />
        <span>BearNote</span>
      </div>

      <form
        className="form mt-5"
        action={(formData) => startTransition(() => handleSubmit(formData))}
      >
        <div className="form_input">
          <label className="form_lbl" htmlFor="email">
            Email
          </label>
          <input
            className="m_input"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>

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

        <button className="form_btn" type="submit">
          {isPending ? (
            // <div className="h-6 w-6 animate-spin rounded-full border-4 border-grey-300 border-t-grey-50"></div>
            <Spinner />
          ) : (
            'Sign up'
          )}
        </button>

        <div className="form_more font-medium">
          Have already an account?
          <Link href="/login">
            <span className="ml-1 font-semibold text-primary-500">
              Login here
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
}
