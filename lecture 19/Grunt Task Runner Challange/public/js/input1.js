const axios = require("axios");

const Solution = async () => {
  const res = await axios.get("https://api.codingninjas.com/api/v3/event_tags");
  console.log(res.data);
};
Solution();
module.exports = Solution;