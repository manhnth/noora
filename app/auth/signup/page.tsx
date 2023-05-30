"use client";

import Link from "next/link";
// import { useEffect } from 'react';

import { signup } from "./action";

export default function Signup() {
  return (
    <form className="form" action={signup}>
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
      <div>
        <Link href="/auth/login">
          <span className="text-grey-600">Already have an account?</span>
        </Link>
      </div>
    </form>
  );
}
