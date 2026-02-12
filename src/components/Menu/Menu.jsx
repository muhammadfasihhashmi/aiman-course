import { useQuery } from "@tanstack/react-query";
import { getMenu } from "../../services/services";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";

function Menu() {
  const { data: menu = [] } = useQuery({
    queryKey: ["menu"],
    queryFn: getMenu,
  });
  const res = useSelector((state) => state.cart.value);
  console.log(res);

  return (
    <div className="flex justify-center  w-[99vw] ">
      <div className=" w-[90vw]  m-5">
        <ul className="grid grid-cols-2 gap-x-10 gap-y-6 ">
          {menu.map((pizza) => (
            <MenuItem pizza={pizza} key={pizza.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
