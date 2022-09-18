import axios from "axios";

export async function load(event) {
  try {
    const res = await axios("https://jsonplaceholder.typicode.com/posts");
    const data = res.data;

    return {
      guides: data,
    };
  } catch (e) {
    return {
      status: e.status,
      error: new Error("Could not fetch the guides"),
    };
  }
}
