//from Live Session OOP Part 1
export function currentPostId(){
    const url = new URL(window.location.href)
    return url.searchParams.get("id")
}