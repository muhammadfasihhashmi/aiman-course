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

export async function createOrder(order) {
  try {
    console.log(order);

    const response = await fetch(`${API_URL}/order`, {
      method: "POST",
      headers: {
        "Contnt-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
    if (!response.ok)
      throw new Error(`create order api failed with status ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("something went wrong");
  }
}
