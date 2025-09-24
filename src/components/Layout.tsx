import { Outlet } from '@tanstack/react-router';
import Header from '@/components/Header';
import { MadeWithApplaa } from '@/components/made-with-applaa';

export function Layout() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <MadeWithApplaa />
    </div>
  );
}