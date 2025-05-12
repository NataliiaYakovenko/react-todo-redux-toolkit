import axios from "axios";

const getUsers = (count = 5, page = 1) =>
  axios.get(`https://randomuser.me/api/?results=${count}&page=${page}&seed=NY`);

export default getUsers;