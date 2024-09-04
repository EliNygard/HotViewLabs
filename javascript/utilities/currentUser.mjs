//from Live Session OOP Part 1

export function currentUser() {
  try {
    return JSON.parse(localStorage.user);
  } catch {
    return null;
  }
}
