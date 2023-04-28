import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer IRNA-JfN4JQ6FACRVTtmnQNtxTBfficDLPzWAhwoV-4X321egin_nZqFc7v5z1sG64S9DM7pf_r10sazU98DpiePiRRY7xYn-cgrbKNukBROC5hQGJF0C7cSGitKZHYx"
  }
});