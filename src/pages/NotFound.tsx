import { useRouterState, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useRouterState({ select: (s) => s.location });

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl">
        <h1 className="text-9xl font-black text-gray-800 mb-4">404</h1>
        <p className="text-2xl font-bold text-gray-700 mb-2">Oops! Page not found</p>
        <p className="text-gray-500 mb-6">The page you are looking for does not exist or has been moved.</p>
        <Button asChild>
          <Link to="/">
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;