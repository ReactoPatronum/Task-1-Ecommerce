import React, { useState } from "react";
import { Input } from "./ui/input";
import { ModeToggle } from "./ModeToggle";
import { Search } from "lucide-react";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";

const Header = () => {
  const [isInputActive, setInputActive] = useState<boolean>(false);
  return (
    <header>
      <div className="py-5 sm:flex items-center px-2">
        <Link
          to="/"
          className="logo text-4xl sm:text-3xl sm:w-72 text-center cursor-pointer"
        >
          ECommerce
        </Link>
        <div className="flex items-center w-full">
          <div
            className={`w-full border rounded-md flex items-center pr-3 group mx-5 ${
              isInputActive && "border-orange-500 transition-all duration-200"
            }`}
          >
            <Input
              onFocus={() => setInputActive(true)}
              onBlur={() => setInputActive(false)}
              placeholder="Search Products.."
              className="border-none group-active:border-orange-500"
            />
            <Search className="cursor-pointer text-orange-500" />
          </div>
          <ModeToggle />
        </div>
      </div>
      <Separator orientation="horizontal" />
    </header>
  );
};

export default Header;
