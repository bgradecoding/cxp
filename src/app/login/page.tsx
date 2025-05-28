"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

interface FormErrors {
  email?: string;
  password?: string;
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const router = useRouter();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});
    
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setErrors({ email: "Invalid email or password" });
      } else {
        // Login successful, redirect to dashboard
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrors({ email: "An error occurred. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-secondary-950 dark:via-secondary-900 dark:to-secondary-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Home Link */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Login Card */}
        <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-lg border border-primary-100 dark:border-secondary-700 p-8">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/images/favicon-32x32.svg"
                alt="CXP Logo"
                width={48}
                height={48}
                className="mr-3"
              />
              <span className="text-3xl font-bold text-primary-700 dark:text-primary-400">CXP</span>
            </div>
            <h1 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
              Welcome Back
            </h1>
            <p className="text-secondary-600 dark:text-secondary-300">
              Sign in to your account to continue
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label 
                htmlFor="email" 
                className="text-sm font-medium text-secondary-900 dark:text-white"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={cn(
                  "w-full px-3 py-2 border rounded-lg transition-colors",
                  "border-secondary-300 dark:border-secondary-600",
                  "bg-white dark:bg-secondary-700",
                  "text-secondary-900 dark:text-white",
                  "placeholder:text-secondary-400 dark:placeholder:text-secondary-500",
                  "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
                  "hover:border-secondary-400 dark:hover:border-secondary-500",
                  errors.email && "border-red-500 dark:border-red-400"
                )}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label 
                htmlFor="password" 
                className="text-sm font-medium text-secondary-900 dark:text-white"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={cn(
                    "w-full px-3 py-2 pr-10 border rounded-lg transition-colors",
                    "border-secondary-300 dark:border-secondary-600",
                    "bg-white dark:bg-secondary-700",
                    "text-secondary-900 dark:text-white",
                    "placeholder:text-secondary-400 dark:placeholder:text-secondary-500",
                    "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
                    "hover:border-secondary-400 dark:hover:border-secondary-500",
                    errors.password && "border-red-500 dark:border-red-400"
                  )}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary-400 hover:text-secondary-600 dark:hover:text-secondary-300 transition-colors"
                >
                  {showPassword ? (
                    <EyeClosedIcon className="w-4 h-4" />
                  ) : (
                    <EyeOpenIcon className="w-4 h-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-primary-600 bg-white dark:bg-secondary-700 border-secondary-300 dark:border-secondary-600 rounded focus:ring-primary-500 focus:ring-2"
                />
                <span className="ml-2 text-sm text-secondary-600 dark:text-secondary-300">
                  Remember me
                </span>
              </label>
              <a
                href="#"
                className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={cn(
                "w-full py-3 px-4 rounded-lg font-medium text-white transition-all",
                "bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-800",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                isLoading && "animate-pulse"
              )}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Signing in...
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-secondary-600 dark:text-secondary-300">
              Don&apos;t have an account?{" "}
              <a
                href="#"
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-xs text-secondary-500 dark:text-secondary-400">
            By signing in, you agree to our{" "}
            <a href="#" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}