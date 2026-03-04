import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  const user = false;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-2xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2 text-foreground">
          <Dumbbell className="w-6 h-6 text-accent" />
          <span className="font-semibold text-lg">GymAI</span>
        </Link>

        <nav>
          {user ? (
            <>
              <Link to={"/profile"}>
                <Button>My Plan</Button>
              </Link>
            </>
          ) : (
            <>
              <Link to={"/auth/sign-in"}>
                <Button>Sign in</Button>
              </Link>

              <Link to={"/auth/sign-up"}>
                <Button variant={"secondary"}>Sign in</Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
