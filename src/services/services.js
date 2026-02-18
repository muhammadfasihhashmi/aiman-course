const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getMenu() {
  try {
    const response = await fetch(`${API_URL}/menu`);
    if (!response.ok) throw new Error("some thing went wrong");
    const data = await response.json();
    if (data.status !== "success") throw new Error("data not found");
    return data.data;
  } catch (error) {
    console.log(error);
    throw new Error("something went wrong");
  }
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error("can not create order");

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
    throw Error("Failed to create your order");
  }
}
