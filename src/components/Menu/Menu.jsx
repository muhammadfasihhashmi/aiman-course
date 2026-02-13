import { useQuery } from "@tanstack/react-query";
import { getMenu } from "../../services/services";
import MenuItem from "./MenuItem";
import CartOverview from "../cart/CartOverView";

function Menu() {
  const { data: menu = [] } = useQuery({
    queryKey: ["menu"],
    queryFn: getMenu,
  });
  return (
    <>
      <div className="flex justify-center  w-[99vw] ">
        <div className=" w-[90vw]  m-5">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-6 ">
            {menu.map((pizza) => (
              <MenuItem pizza={pizza} key={pizza.id} />
            ))}
          </ul>
        </div>
      </div>
      <CartOverview />
    </>
  );
}

export default Menu;
