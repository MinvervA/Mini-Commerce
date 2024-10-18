import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-6">
      <h1 className="text-6xl">404 : Page Not Found!</h1>
      <Link to="/">
        <Button>Go back Home</Button>
      </Link>
    </div>
  );
};
