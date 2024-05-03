import { API_BASE, API_POSTS } from "../api/constantAPI.mjs";
import { getPost } from "../api/getPost.mjs";
import { loginMessageSuccess } from "../messages/loginMessages.mjs";
import { formatDate } from "./formatting.mjs";

console.log(API_BASE + API_POSTS);

const userName = JSON.parse(localStorage.getItem('userName'));
console.log(userName);

// Login success message
document.addEventListener("DOMContentLoaded", function () {
    const loginSuccess = localStorage.getItem("loginSuccess");
    // console.log(loginMessageSuccess);
    if (loginSuccess) {
        loginMessageSuccess();
        localStorage.removeItem("loginSuccess");
    }
});

// display posts ✅ (generated into each row in table)

// I have all the posts created in the getPost ✅

// 1. generate tableHtml (move to separate mjs file)
// (when button Add post on create.html is clicked, empty form)

async function renderTable() {

    const userName = JSON.parse(localStorage.getItem("userName"))
    const name = userName.data.name;
    const API_NAME = `/${name}`;
    const responseData = await getPost(API_BASE + API_POSTS + API_NAME);
    const posts = responseData.data;
    console.log(posts);
    posts.forEach(post => {
        generateTableHtml(post)
    });
}
await renderTable();

function generateTableHtml(post) {
    const tableBody = document.getElementById("tbody");

    const tableRow = document.createElement("tr");

    const title = document.createElement("td");
    title.innerHTML = post.title;

    const author = document.createElement("td");
    author.innerHTML = post.author.name;

    const date = document.createElement("td");
    const formattedDate = post.created;
    date.textContent = formatDate(formattedDate)
    

    tableRow.append(title, author, date)
    tableBody.appendChild(tableRow)

    // const postTitle = document.createElement("h2");
    // postTitle.classList.add("post-title")
    // postTitle.textContent = post.title;

    // const testPostContainer = document.getElementById("test-posts");
    // testPostContainer.appendChild(postTitle);
}

