"use client";

import Link from "next/link";

async function getData() {
  const res = await fetch("/api/auth/login");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error("Failed to fetch data");
  }

  console.log("here", res);

  // return res.json();
}

export default function Login() {
  getData();
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
