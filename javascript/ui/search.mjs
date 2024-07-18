// Checks a single post object for a match
export function postMatches(query, post) {
    const content = [
        post.title,
        post.tags.join(", ")
    ]

    return content.map(value => value.toLocaleLowerCase()).some(value => {
        return value.includes(query.toLocaleLowerCase())
    })
}

// Filters a post array for matches
export function searchPosts(query, posts) {
    return posts.filter(post => postMatches(query, post))
}

// 1. display a dropdown when the search bar is clicked
// 2. Populate the dropdown with search results as the user types
// 3. Clear previous results before displaying new ones
// 4. When clicking on a result (a post), take the user to the blog post page

export function openSearchBar() {
    const search = document.forms.search;
    search.addEventListener("click", () => {
        console.log("search clicked");
        

    })
}


