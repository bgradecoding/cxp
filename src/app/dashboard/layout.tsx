"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import LeftSidebar from "@/components/dashboard/LeftSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    if (status === "loading") return;
    if (!session) router.push("/login");
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white dark:from-secondary-950 dark:to-secondary-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-secondary-600 dark:text-secondary-300">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white dark:from-secondary-950 dark:to-secondary-900 flex">
      {/* Left Sidebar */}
      <LeftSidebar
        className="fixed left-0 top-0 h-screen z-40"
        onToggle={setIsSidebarCollapsed}
      />

      {/* Main Content Area */}
      <div className={`flex-1 transition-all duration-300`}>
        {/* Header */}
        <header className="bg-white dark:bg-secondary-800 shadow-sm border-b border-primary-100 dark:border-secondary-700">
          <div className="px-4 sm:px-6 lg:px-8">
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
                  CXP Dashboard
                </span>
              </div>

              {/* User Info & Logout */}
              <div className="flex items-center space-x-4">
                <div className="text-sm">
                  <p className="text-secondary-900 dark:text-white font-medium">
                    Welcome, {session.user?.name}
                  </p>
                  <p className="text-secondary-500 dark:text-secondary-400">
                    {session.user?.email}
                  </p>
                </div>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-4 sm:px-6 lg:px-8 py-12">{children}</main>
      </div>
    </div>
  );
}
