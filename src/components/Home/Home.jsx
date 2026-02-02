import { useSelector } from "react-redux";
import CreateUser from "../user/CreateUser";
import { Link } from "react-router";

function Home() {
  const userName = useSelector((state) => state.user.value);
  return (
    <div className="h-[91.4vh] flex flex-col items-center gap-8 pt-16 bg-cover bg-no-repeat bg-center ">
      <div className="text-center text-3xl  font-semibold">
        <h1>The best pizza.</h1>
        <h1 className=" text-yellow-500  ">
          Straight out of the oven, straight to you.
        </h1>
      </div>
      <div>👋 Welcome! Please start by telling us your name:</div>
      {userName ? (
        <Link to={"/menu"}>
          <button>continue ordering {userName}</button>
        </Link>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
