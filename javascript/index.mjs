import NoroffAPI from "./api/index.mjs";
import { currentPostId } from "./utilities/currentPostId.mjs";


const api = new NoroffAPI("https://v2.api.noroff.dev")

const post = await api.post.get("9d3df64e-b692-40c9-882e-9104193c511b")
console.log(post);


const postId = currentPostId();