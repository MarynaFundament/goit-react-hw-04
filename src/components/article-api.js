import axios from "axios";

// axios.defaults.baseURL = "https://api.unsplash.com/photos/?client_id=9iRNUlubdG7AueiCpBCPusRdK9mlzC51I2uw9WUlvGE"
// axios.defaults.baseURL = "http://hn.algolia.com/api/v1"

export const fetchArticles = async (searchQuery, page) => {

  const response = await axios.get("http://hn.algolia.com/api/v1/search", {
      params: {
        query: searchQuery,
        hitsPerPage: 5,
        page,
      },
    })
    console.log(response.data.hits)

    return response.data.hits

}