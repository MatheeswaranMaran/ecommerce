import React, { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, Phone, ShieldCheck } from "lucide-react";

const AuthPages = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic remains the same
    if (isLogin) {
      if (!formData.email || !formData.password) return alert("Required fields missing");
      alert(`Login successful!`);
    } else {
      if (formData.password !== formData.confirmPassword) return alert("Passwords match error");
      alert(`Account created!`);
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: "", email: "", mobileNumber: "", password: "", confirmPassword: "" });
    setShowPassword(false);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Professional Gradient Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-900/10 rounded-full blur-[120px]"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800 border border-slate-700 rounded-2xl shadow-xl mb-6">
            <ShieldCheck className="w-10 h-10 text-indigo-400" />
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            ShopHub <span className="text-indigo-500 text-sm font-medium tracking-normal ml-1">PRO</span>
          </h1>
          <p className="text-slate-400 mt-2 text-sm">
            {isLogin ? "Secure access to your dashboard" : "Start your 14-day free trial"}
          </p>
        </div>

        {/* Auth Card */}
        <div className="bg-slate-900/50 backdrop-blur-2xl border border-slate-800 rounded-3xl shadow-2xl p-8">
          {/* Toggle Tabs */}
          <div className="flex mb-8 bg-slate-950/50 rounded-xl p-1 border border-slate-800">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-200 ${
                isLogin ? "bg-slate-800 text-white shadow-sm" : "text-slate-500 hover:text-slate-300"
              }`}
            >
              Log in
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-200 ${
                !isLogin ? "bg-slate-800 text-white shadow-sm" : "text-slate-500 hover:text-slate-300"
              }`}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
                <div className="relative mt-1.5">
                  <User className="absolute left-3 top-3.5 w-5 h-5 text-slate-500" />
                  <input
                    name="name"
                    type="text"
                    onChange={handleChange}
                    className="w-full bg-slate-950/50 border border-slate-800 text-white pl-11 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-600"
                    placeholder="Enter name"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Work Email</label>
              <div className="relative mt-1.5">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-slate-500" />
                <input
                  name="email"
                  type="email"
                  onChange={handleChange}
                  className="w-full bg-slate-950/50 border border-slate-800 text-white pl-11 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-600"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Password</label>
              <div className="relative mt-1.5">
                <Lock className="absolute left-3 top-3.5 w-5 h-5 text-slate-500" />
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  onChange={handleChange}
                  className="w-full bg-slate-950/50 border border-slate-800 text-white pl-11 pr-12 py-3 rounded-xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-600"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center space-x-2 cursor-pointer text-slate-400 hover:text-slate-300">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-800 bg-slate-950 text-indigo-600 focus:ring-0 focus:ring-offset-0" />
                  <span>Remember device</span>
                </label>
                <a href="#" className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">Forgot password?</a>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3.5 rounded-xl font-bold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg shadow-indigo-500/20 active:scale-[0.98]"
            >
              <span>{isLogin ? "Sign In" : "Get Started"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-800"></div></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="px-3 bg-[#161d31] text-slate-500 tracking-widest">Enterprise Security</span></div>
          </div>

          <p className="text-center text-sm text-slate-400">
            {isLogin ? "New to the platform?" : "Already have an account?"}{" "}
            <button
              onClick={toggleAuthMode}
              className="text-indigo-400 font-bold hover:text-indigo-300 underline-offset-4 hover:underline transition-all"
            >
              {isLogin ? "Create account" : "Log in here"}
            </button>
          </p>
        </div>

        <footer className="mt-10 flex justify-center space-x-6 text-slate-500 text-xs font-medium">
          <span>&copy; 2025 ShopHub Inc.</span>
          <a href="#" className="hover:text-slate-300">Privacy</a>
          <a href="#" className="hover:text-slate-300">Terms</a>
        </footer>
      </div>
    </div>
  );
};

export default AuthPages;