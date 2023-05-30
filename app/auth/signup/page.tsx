"use client";

// import { useEffect } from 'react';

import { signup } from "./action";

// export async function signup(data: FormData) {
//   'use server';

//   console.log(data);
// }

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
        Add to Cart
      </button>
    </form>
  );
}
