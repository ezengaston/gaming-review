import axios from "axios";
import { error } from "@sveltejs/kit";

export async function load(event) {
  try {
    const res = await axios("https://jsonplaceholder.typicode.com/posts");
    const data = res.data;

    return {
      guides: data,
    };
  } catch (e) {
    throw error(e.response.status, "Could not fetch the guides");
  }
}
