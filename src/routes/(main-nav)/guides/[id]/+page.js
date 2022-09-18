import axios from "axios";

export async function load({ params }) {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    const data = res.data;

    return {
      guide: data,
    };
  } catch (e) {
    return {
      status: e.status,
      error: new Error("Could not fetch the guide"),
    };
  }
}
