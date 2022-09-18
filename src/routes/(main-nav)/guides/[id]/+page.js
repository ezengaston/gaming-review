import axios from "axios";
import { redirect } from "@sveltejs/kit";

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
    throw redirect(307, "/guides");
  }
}
