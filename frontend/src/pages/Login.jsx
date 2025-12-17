import React, { useState } from "react";
import { useApp } from "../context/AppContext.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser } = useApp();

  const submitHandler = (e) => {
    e.preventDefault();
    loginUser(email, password);
    alert("Logged In Successfully");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950">
      <div className="flex flex-col items-center">

        {/* Brand */}
        <h1 className="mb-2 text-4xl font-extrabold tracking-wide text-slate-100">
          Wiz<span className="text-sky-400">Cart</span>
        </h1>

        {/* Page title */}
        <h2 className="mb-1 text-xl font-semibold text-slate-200">
          Welcome back
        </h2>

        <p className="mb-6 text-sm text-slate-400">
          Sign in to continue to your account
        </p>

        {/* Login Form */}
        <form
          onSubmit={submitHandler}
          className="w-[360px] bg-slate-900/90 border border-slate-800 rounded-2xl p-8 flex flex-col gap-4 shadow-2xl"
        >
          <input
            type="email"
            value={email}
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-400 px-4 py-3 rounded-xl outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30 transition"
            required
          />

          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-400 px-4 py-3 rounded-xl outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30 transition"
            required
          />

          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-sky-400 to-sky-500 text-slate-950 font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-sky-400/40 active:scale-95 transition"
          >
            Sign In
          </button>
        </form>

        {/* Footer Link */}
        <p className="mt-5 text-sm text-slate-400">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-sky-400 hover:text-sky-300 hover:underline transition"
          >
            Create one
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
