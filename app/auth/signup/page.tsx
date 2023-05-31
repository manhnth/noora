"use client";

import Link from "next/link";
import { signup } from "./action";

export default function Signup() {
  return (
    <div className="w-80 rounded-md bg-white p-6">
      <div className="flex justify-center text-lg font-medium">Sign up</div>

      <form className="form mt-3" action={signup}>
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
            placeholder="******"
            required
          />
        </div>

        <button className="form_btn" type="submit">
          Sign up
        </button>

        <div className="form_more">
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
