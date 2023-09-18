import React, { useRef, useState } from "react";
import { Input } from "./ui/input";
import { ModeToggle } from "./ModeToggle";
import { Search } from "lucide-react";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const [isInputActive, setInputActive] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ref.current) {
      navigate(`/search?product=${ref.current.value}`);
    }
  };

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
          <form
            onSubmit={handleSubmit}
            className={`w-full border rounded-md flex items-center pr-3 group mx-5 ${
              isInputActive && "border-orange-500 transition-all duration-200"
            }`}
          >
            <Input
              ref={ref}
              onFocus={() => setInputActive(true)}
              onBlur={() => setInputActive(false)}
              placeholder="Search Products.."
              className="border-none group-active:border-orange-500"
            />
            <Button variant="ghost" type="submit" size="icon">
              <Search className="cursor-pointer text-orange-500" />
            </Button>
          </form>
          <ModeToggle />
        </div>
      </div>
      <Separator orientation="horizontal" />
    </header>
  );
};

export default Header;
