import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-11/12 mx-auto h-16 flex items-center gap-3 px-5">
      <div className="flex items-center">
        <img
          src="https://img.icons8.com/?size=160&id=ACLAf31fuu2O&format=png"
          alt=""
          className="h-14 w-14"
        />
        <span className="font-bold ml-2">Task</span>Master
      </div>
      <Link to={"/tasks"}>Tasks</Link>
      <Link to={"/users"}>Users</Link>
    </nav>
  );
};

export default Navbar;
