import { useSelector } from "react-redux";
import { Link } from "react-router";

function Header() {
  const userName = useSelector((state) => state.user.value);
  return (
    <header className="flex justify-between items-center p-6 bg-yellow-500 h-16 w-full z-50 fixed ">
      <Link to={"/"} className="flex items-center gap-2">
        <h1 className="text-lg font-semibold tracking-widest">
          Fast React Pizza
        </h1>
      </Link>
      <div className="flex justify-center items-center gap-5">
        <input
          className="border-2 border-slate-200 w-48 h-10 p-4 rounded-full focus:outline-none bg-slate-50 placeholder:text-sm shadow-inner"
          type="text"
          placeholder="Order ID..."
        />
      </div>
      {userName && <p className="border border-black">{userName}</p>}
    </header>
  );
}

export default Header;
