import { Link } from "react-router";
import { ModeToggle } from "./ModeToggler";

const Navbar = () => {
  return (
    <nav className="w-11/12 mx-auto h-16 flex items-center justify-between gap-3 px-5">
      <div className="flex items-center">
        <img
          src="https://img.icons8.com/?size=160&id=ACLAf31fuu2O&format=png"
          alt=""
          className="h-10 w-10"
        />
        <span className="font-bold ml-2">Task</span>Master
      </div>
      <div className="flex gap-4">
        <Link to={"/tasks"}>Tasks</Link>
        <Link to={"/users"}>Users</Link>
      </div>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
