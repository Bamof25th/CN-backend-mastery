import axios from "axios";

export const userModel = async () => {
  try {
    const res = await axios("https://dummyjson.com/users");
    return res.data.users;
  } catch (err) {
    console.log(err);
  }
};
