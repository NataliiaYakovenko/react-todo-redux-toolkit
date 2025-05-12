import axios from "axios";

const getUsers =(count = 5, page = 1) => axios.create({
  baseURL:
    `https://randomuser.me/api/?&results=${count}&seed=NYpage=${page}`,
});

export default getUsers;
