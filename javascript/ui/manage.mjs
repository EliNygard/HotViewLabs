import { API_BASE, API_NAME, API_POSTS } from "../api/constantAPI.mjs";
import { getPosts } from "../api/getPosts.mjs";
import { generateTableHtml } from "../generateHtml/manageTableHtml.mjs";
import { deleteSuccessMessage } from "../messages/deleteMessages.mjs";
import { loginMessageSuccess } from "../messages/loginMessages.mjs";
import { hideLoader, showLoader } from "./loader.mjs";

// Activating login success message
document.addEventListener("DOMContentLoaded", function () {
  const displayMessage = (key, callback) => {
    if (localStorage.getItem(key)) {
      callback();
      localStorage.removeItem(key);
    }
  };
  displayMessage("loginSuccess", loginMessageSuccess);
  displayMessage("deleteSuccess", deleteSuccessMessage);
});

// (when button Add post on create.html is clicked, empty form)

export async function renderTable() {
  showLoader();

  try {
    // Promise for testing, REMOVE
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const userName = JSON.parse(localStorage.getItem("userName"));
    console.log(userName);
    const token = localStorage.getItem("accessToken");
    const responseData = await getPosts(API_BASE + API_POSTS + API_NAME, token);
    const posts = responseData.data;
    console.log(posts);
    posts.forEach((post) => {
      generateTableHtml(post);
    });
  } catch {
    console.log("catch error here");
  } finally {
    hideLoader();
  }
}