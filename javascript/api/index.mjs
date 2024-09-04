import { currentUser } from "../utilities/currentUser.mjs";

export default class NoroffAPI {
  apiBase = "";
  apiLoginPath = "";
  apiRegisterPath = "";

  constructor(apiBase) {
    this.apiBase = apiBase;
    this.apiLoginPath = apiBase + "/auth/login";
    this.apiRegisterPath = apiBase + "/auth/register";
  }

  auth = {
    login: async ({ email, password }) => {
      const body = JSON.stringify({ email, password });

      const response = await fetch(this.apiLoginPath, {
        headers: "",
        method: "post",
        body,
      });

      if (response.ok) {
        const { data } = await response.json();
        const { accessToken: token, ...user } = data;
        localStorage.token = token;
        localStorage.user = JSON.stringify(user);
        return data;
      }

      throw new Error("Error");
    },
    register: async ({ name, email, password }) => {
      const body = JSON.stringify({ name, email, password });

      const response = await fetch(this.apiRegisterPath, {
        headers: "",
        method: "post",
        body,
      });

      if (response.ok) {
        const { data } = await response.json();
        return data;
      }
      throw new Error("error");
    },
  };

  post = {
    get: async (id) => {
      const user = currentUser();

      const url = `${this.apiBase}/blog/posts/${user.name}/${id}`;

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });

      if (response.ok) {
        const { data } = await response.json();
        return data;
      }

      throw new Error("error");
    },
    put: () => {},
    delete: () => {},
    post: () => {},
  };
}
