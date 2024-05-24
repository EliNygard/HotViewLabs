import {
  API_BASE,
  API_NAME,
  API_POSTS,
} from "./javascript/api/constantAPI.mjs";
import { getPosts } from "./javascript/api/getPosts.mjs";
import { generateCarouselItem } from "./javascript/generateHtml/carouselItem.mjs";
import { generateHeaderHtml } from "./javascript/generateHtml/header.mjs";
import { generateHeaderLoggedInHtml } from "./javascript/generateHtml/headerLoggedIn.mjs";
import { generateThumbPostsHtml } from "./javascript/generateHtml/thumbPostHtml.mjs";
import { hideLoader, showLoader } from "./javascript/ui/loader.mjs";
import {
  paginate,
  renderPaginationControls,
} from "./javascript/ui/pagination.mjs";
import { sortPostsByDate } from "./javascript/ui/sortPosts.mjs";

async function checkAndRenderPosts() {
  const userName = JSON.parse(localStorage.getItem("userName"));

  showLoader();

  try {
    // Promise for testing, REMOVE
    // await new Promise(resolve => setTimeout(resolve, 2000));
    if (userName) {
      // if user is logged in
      await generateHeaderLoggedInHtml();
      await setupPostThumbs(API_BASE + API_POSTS + API_NAME);
      // await renderPosts(API_BASE + API_POSTS + API_NAME);
      await renderNewPostsCarousel(API_BASE + API_POSTS + API_NAME);
    } else {
      // If user is not logged in, render posts from this account anyway
      await generateHeaderHtml();
      await setupPostThumbs(API_BASE + API_POSTS + "/Leli_Nygard");
      // await renderPosts(API_BASE + API_POSTS + "/Leli_Nygard");
      await renderNewPostsCarousel(API_BASE + API_POSTS + "/Leli_Nygard");
    }
  } catch (error) {
    console.error(error);
  } finally {
    hideLoader();
  }
}

await checkAndRenderPosts();

export async function renderPosts(posts) {
  // const responseData = await getPosts(url);
  // const posts = responseData.data;

  // slice the 12 latests posts:
  // const slicedPosts = posts.slice(0, 12);

  const imageGallery = document.querySelector(".image-gallery");
  imageGallery.innerHTML = "";
  posts.forEach((post) => {
    const postThumb = generateThumbPostsHtml(post);
    imageGallery.appendChild(postThumb);
  });
}

async function renderNewPostsCarousel(url) {
  const responseData = await getPosts(url);
  const posts = responseData.data;
  console.log(posts);

  // slice the 3 latest posts:
  const latestPosts = posts.slice(0, 3);

  const carousel = document.getElementById("carousel");
  carousel.innerHTML = "";
  latestPosts.forEach((newPost) => {
    const carouselItem = generateCarouselItem(newPost);
    carousel.appendChild(carouselItem);
  });
}

async function setupPostThumbs(url) {
  const responseData = await getPosts(url);
  const posts = responseData.data;
  const postsMeta = responseData.meta;
  console.log(postsMeta);
  sortPostsByDate(posts);

  const categories = extractCategories(posts)
  console.log(categories);
  generateCategoryHtml(categories)

  addEventListenerOnCategory(posts)

  const paginatedPosts = paginate(posts, 4);
  renderPosts(paginatedPosts[0]);
  renderPaginationControls(paginatedPosts, posts);
}

// FILTER POSTS BY CATEGORY
// extract category from tags in post api
// generate html options on select element from categories
// add event listener on options
// when click on option, display all posts with that category tag

function extractCategories(posts){
  const categories = new Set()
  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      categories.add(tag)
    })
  })
  console.log(Array.from(categories));
  return Array.from(categories)
}

function generateCategoryHtml(categories) {
  const select = document.getElementById("category")
  categories.forEach((category) => {
    const option = document.createElement("option")
    option.value = category
    option.textContent = category
    select.appendChild(option)
  })
}

function addEventListenerOnCategory(posts) {
  const select = document.getElementById("category")
  select.addEventListener("change", () => {
    const selectedCategory = select.value
    const filteredPosts = filterPostsByCategory(posts, selectedCategory)
    renderPosts(filteredPosts)
  })
}

function filterPostsByCategory(posts, category) {
  return posts.filter(post => post.tags.includes(category))
}


// NEW SLIDER CODE FROM YOUTUBE
// can not display carousel items when slider code is moved to another file. Find out!

const prevButton = document.getElementById("prev-button");
prevButton.addEventListener("click", () => {
  prevSlide();
});

const nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", () => {
  nextSlide();
});

// try to add dots to the slider?

const slides = document.querySelectorAll("#carousel li");
let slideIndex = 0;

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("display-slide");
  }
}

document.addEventListener("DOMContentLoaded", initializeSlider());

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("display-slide");
  });
  slides[slideIndex].classList.add("display-slide");
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

// async function renderHomePage() {
//   // await renderPosts();
// }

// await renderHomePage();

// FROM W3SCHOOLS CODE

// carousel buttons
// const dot1 = document.getElementById("dot-1")
// const dot2 = document.getElementById("dot-2")
// const dot3 = document.getElementById("dot-3")

// dot1.addEventListener('click', () => {
//   currentSlide(1)
// })

// dot2.addEventListener('click', () => {
//   currentSlide(2)
// })

// dot3.addEventListener('click', () => {
//   currentSlide(3)
// })

// const prev = document.getElementById("prev-button")
// const next = document.getElementById("next-button")

// prev.addEventListener('click', () => {
//   plusSlides(-1)
// })

// next.addEventListener('click', () => {
//   plusSlides(1)
// })
