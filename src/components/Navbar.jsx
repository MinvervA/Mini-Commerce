import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { IoCart, IoHeart } from "react-icons/io5";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="h-16 w-full border-b-2 flex gap-8 items-center justify-between px-4">
      {/* BRAND */}
      <p className="text-2xl font-bold hover:cursor-pointer">FastCampusCommerce</p>
      {/* SEARCH BAR */}
      <Input className="max-w-[600px]" placeholder="Search Product..." />
      {/* BUTTONS */}
      <div className="hidden md:flex space-x-4 h-5 items-center">
        <div className="flex space-x-2">
          <Link to="/cart">
            <Button size="icons" variant="outline" className="p-1">
              <IoCart className="size-6" />
            </Button>
          </Link>
          <Button size="icons" variant="outline" className="p-1">
            <IoHeart className="size-6" />
          </Button>
        </div>
        <Separator orientation="vertical" className="h-full" />
        <div className="flex space-x-2">
          <Button>Log In</Button>
          <Button variant="outline">Sign Up</Button>
        </div>
      </div>
    </header>
  );
};
