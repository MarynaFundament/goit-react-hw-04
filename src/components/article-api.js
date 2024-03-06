import axios from "axios";

export const fetchArticles = async (searchQuery, page) => {

  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 9iRNUlubdG7AueiCpBCPusRdK9mlzC51I2uw9WUlvGE",
    },
    params: {
      query: searchQuery,
      per_page: 18,
      page,
    },
  });

    console.log(response.data.results)

    return response.data.results

}