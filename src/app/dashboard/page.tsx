import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-secondary-900 dark:text-white mb-4">
        🎉 Welcome to CXP Dashboard!
      </h1>
      <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto mb-8">
        You have successfully logged in to the CXP LCA Platform. This is a
        protected area that requires authentication to access.
      </p>
      <div className="flex justify-center mb-12">
        <Link 
          href="/dashboard/transport-tracking" 
          className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-2"
        >
          운송 증적 수집 시작하기
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Dashboard Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white dark:bg-secondary-800 p-6 rounded-xl shadow-sm border border-primary-100 dark:border-secondary-700">
          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
            LCA Projects
          </h3>
          <p className="text-secondary-600 dark:text-secondary-300 text-sm">
            Manage your life cycle assessment projects and analyses.
          </p>
        </div>

        <div className="bg-white dark:bg-secondary-800 p-6 rounded-xl shadow-sm border border-primary-100 dark:border-secondary-700">
          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">📈</span>
          </div>
          <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
            Reports
          </h3>
          <p className="text-secondary-600 dark:text-secondary-300 text-sm">
            Generate and view detailed environmental impact reports.
          </p>
        </div>

        <div className="bg-white dark:bg-secondary-800 p-6 rounded-xl shadow-sm border border-primary-100 dark:border-secondary-700">
          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">⚙️</span>
          </div>
          <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
            Settings
          </h3>
          <p className="text-secondary-600 dark:text-secondary-300 text-sm">
            Configure your account and platform preferences.
          </p>
        </div>
      </div>

      {/* Authentication Info */}
      <div className="bg-primary-50 dark:bg-secondary-800 p-6 rounded-xl border border-primary-200 dark:border-secondary-700">
        <h2 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
          🔐 Authentication Test Information
        </h2>
        <div className="space-y-2 text-sm">
          <p className="text-secondary-700 dark:text-secondary-300">
            <strong>Test Credentials:</strong>
          </p>
          <p className="text-secondary-600 dark:text-secondary-400">
            • Email: admin@cxp.com
          </p>
          <p className="text-secondary-600 dark:text-secondary-400">
            • Password: admin123
          </p>
          <p className="text-secondary-600 dark:text-secondary-400 mt-4">
            This page is protected by NextAuth.js and can only be accessed
            after successful authentication.
          </p>
        </div>
      </div>
    </div>
  );
}
