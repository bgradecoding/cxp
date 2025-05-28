"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { ComponentProps } from "@/types";

type HeaderProps = ComponentProps;

export default function Header({ className = "" }: HeaderProps) {
  const { data: session } = useSession();

  return (
    <header className={`sticky top-0 z-50 bg-white/80 dark:bg-secondary-900/80 backdrop-blur-md border-b border-primary-100 dark:border-secondary-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/favicon-32x32.svg"
              alt="CXP Logo"
              width={32}
              height={32}
              className="mr-3"
            />
            <span className="text-2xl font-bold text-primary-700 dark:text-primary-400">
              CXP
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#modules"
              className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Modules
            </a>
            <a
              href="#contact"
              className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Auth Button */}
          {session ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm text-secondary-600 dark:text-secondary-300">
                {session.user?.name}
              </span>
              <Link href="/dashboard">
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors mr-2">
                  Dashboard
                </button>
              </Link>
              <button 
                onClick={() => signOut({ callbackUrl: "/" })}
                className="bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link href="/login">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}