import axios from "axios";
import { URL } from '../constant';

const getNews = (page, size = 5) => {
  try {
    return axios.get(`${URL}/news?page=${page}&size=${size}`);
  } catch (error) {
    console.log(`Error while calling getNews API`, error);
  }
};

const register = (user) => {
  try {
    const { name, email, password, confirmPassword } = user;
    if (name && email && password && password === confirmPassword) {
      return axios
        .post(`${URL}/register`, user)
        .then((res) => alert(res.data.message));
    } else {
      alert("Invalid Input");
    }
  } catch (error) {
    console.log(`Error while calling Register API`, error);
  }
};

// const login = (user, setLoginUser) => {
//   axios.post(`/login`, user).then((res) => {
//     alert(res.data.message);
//     if (res.data.user) {
//       setLoginUser(res.data.user);
//       window.history.pushState("pg", "title", "/");
//     }
//   });
// };

const bookmarks = (bookmark) => {
  try {
    axios.post(`${URL}/bookmarks`, bookmark).then((res) => alert(res.data.message));
  } catch (error) {
    console.log(`Error while calling Bookmarks API`, error);
  }
};

const getBookmarks = () => {
  try {
    return axios.get(`${URL}/bookmarkedNews`);
  } catch (error) {
    console.log(`Error while calling bookmarkedNews API`, error);
  }
};

const deleteBookmarks = (email, title) => {
  const deleteBook = {
    email,
    title,
  };

  try {
    axios
      .post(`${URL}/deleteBookmarks`, deleteBook)
      .then((res) => alert("Bookmark Removed"));
  } catch (error) {
    console.log(`Error while calling DeleteBookmarks API`, error);
  }
};

export { getNews, register, bookmarks, getBookmarks, deleteBookmarks };
