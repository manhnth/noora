"use client";

import Link from "next/link";

export default function Signup() {
  return (
    <div className="w-80 rounded-md bg-white p-6">
      <div className="flex justify-center text-lg font-semibold text-grey-500">
        Login
      </div>

      <form className="form" action={""}>
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
        <button className="form_btn" type="submit">
          Login
        </button>
        <div className="mt-6 flex justify-center text-sm font-medium text-grey-500">
          Have already an account?
          <Link href="/auth/login">
            <span className="ml-1 font-semibold text-primary-500">
              Login here
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
}
