"use client";

import Link from "next/link";

export default function Login() {
  return (
    <div className="w-80 rounded-md bg-white p-6 font-medium">
      <div className="flex justify-center text-lg">Login</div>

      <form className="form mt-3" action={""}>
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
