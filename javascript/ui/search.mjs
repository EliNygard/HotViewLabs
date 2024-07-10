export function postMatches(query, post) {
    const content = [
        post.title,
        post.tags.join(", ")
    ]

    return content.map(value => value.toLocaleLowerCase()).some(value => {
        return value.includes(query.toLocaleLowerCase())
    })
}

export function searchPosts(query, posts) {
    return posts.filter(post => postMatches(query, post))
}
