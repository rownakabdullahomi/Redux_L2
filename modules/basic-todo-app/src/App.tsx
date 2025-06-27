import { Outlet } from "react-router";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
