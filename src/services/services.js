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
  }
}
