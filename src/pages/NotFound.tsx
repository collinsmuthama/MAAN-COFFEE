import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="text-center max-w-lg mx-auto px-4">
        <h1 className="font-display text-8xl md:text-9xl font-bold gold-text mb-4">
          404
        </h1>
        <h2 className="font-display text-3xl font-bold mb-4">
          Page <span className="gold-text">Not Found</span>
        </h2>
        <p className="text-muted-foreground mb-8">
          The page you're looking for seems to have wandered off. 
          Let's get you back to exploring our premium coffee collection.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="luxury" size="lg" asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="goldOutline" size="lg" asChild>
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Browse Products
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
