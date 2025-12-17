import React, { useState } from "react";
import { useApp } from "../context/AppContext";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [mobileError, setMobileError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { registerUser } = useApp();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(mobileNumber)) {
      setMobileError("Mobile number must be exactly 10 digits");
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    setMobileError("");
    setPasswordError("");

    registerUser(name, email, mobileNumber, password);
    alert("Account created successfully");
  };

  // ✅ Common input styling (UI only, no logic)
  const inputStyle =
    "w-full bg-slate-950 border border-slate-800 text-slate-200 " +
    "placeholder-slate-400 px-4 py-3 rounded-xl outline-none " +
    "focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30 transition";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950">
      <div className="flex flex-col items-center">

        {/* Brand */}
        <h1 className="mb-2 text-4xl font-extrabold tracking-wide text-slate-100">
          Wiz<span className="text-sky-400">Cart</span>
        </h1>

        {/* Title */}
        <h2 className="mb-1 text-xl font-semibold text-slate-200">
          Create your account
        </h2>

        <p className="mb-6 text-sm text-slate-400">
          Already have an account?{" "}
          <a
            href="/signin"
            className="text-sky-400 hover:text-sky-300 hover:underline transition"
          >
            Sign in
          </a>
        </p>

        {/* Form */}
        <form
          onSubmit={submitHandler}
          className="w-[380px] bg-slate-900/90 border border-slate-800 rounded-2xl p-8 flex flex-col gap-4 shadow-2xl"
        >
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputStyle}
            required
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputStyle}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`${inputStyle} ${
              passwordError ? "border-red-500 focus:ring-red-500/30" : ""
            }`}
            required
          />

          <div>
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`${inputStyle} ${
                passwordError ? "border-red-500 focus:ring-red-500/30" : ""
              }`}
              required
            />
            {passwordError && (
              <p className="mt-1 text-xs text-red-400">
                {passwordError}
              </p>
            )}
          </div>

          <div>
            <input
              type="tel"
              placeholder="Mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className={`${inputStyle} ${
                mobileError ? "border-red-500 focus:ring-red-500/30" : ""
              }`}
              required
            />
            {mobileError && (
              <p className="mt-1 text-xs text-red-400">
                {mobileError}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-sky-400 to-sky-500 text-slate-950 font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-sky-400/40 active:scale-95 transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
