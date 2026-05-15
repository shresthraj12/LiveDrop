import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { LogOut, User } from 'lucide-react';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-2xl bg-gray-800 shadow-xl border border-gray-700">
          <div className="border-b border-gray-700 bg-gray-800 px-6 py-6 sm:px-8">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
              <button
                onClick={logout}
                className="inline-flex items-center rounded-lg bg-red-600/10 px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-600/20 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
          
          <div className="px-6 py-8 sm:p-8">
            <div className="flex items-center space-x-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-600/20 text-indigo-500 ring-2 ring-indigo-500/20">
                <User className="h-10 w-10" />
              </div>
              <div>
                <h2 className="text-xl font-medium text-white">Welcome, {user?.name}!</h2>
                <p className="text-sm text-gray-400 mt-1">{user?.email}</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-indigo-400 font-semibold">
                  Authentication Successful
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-medium text-white border-b border-gray-700 pb-2 mb-4">
                Your Details
              </h3>
              <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-400">Account ID</dt>
                  <dd className="mt-1 text-sm text-white font-mono">{user?._id}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-400">Status</dt>
                  <dd className="mt-1 text-sm text-green-400">Active</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
