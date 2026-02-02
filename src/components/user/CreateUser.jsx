import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserName } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router";

function CreateUser() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(setUserName(name));
    navigate("/menu");
    setName("");
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center">
      <input
        type="text"
        placeholder="enter your name..."
        value={name}
        onChange={(event) => setName(event.target.value)}
        className=" h-12 w-lg rounded-full bg-zinc-200 p-6"
        maxLength={12}
        minLength={1}
      />
      {name && (
        <button
          type="submit"
          className="h-12 border border-zinc-400 w-42 rounded-full hover:bg-zinc-200 cursor-pointer"
        >
          Order Now
        </button>
      )}
    </form>
  );
}

export default CreateUser;
