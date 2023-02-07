const axios = require("axios");
// http://localhost:3000/api/data?indices=NIFTY 50
// http://localhost:3000/api/data?indices=NIFTY PHARMA
// http://localhost:3000/api/data?indices=NIFTY IT
export default function handler(req, res) {
  // console.log(req.query);
  const options = {
    method: "GET",
    url: "https://latest-stock-price.p.rapidapi.com/price",
    params: { Indices: req.query.indices},
    headers: {
      "X-RapidAPI-Key": "baed0f0ab7msh233268c70b5b296p1281c7jsncb4e068d88ab",
      "X-RapidAPI-Host": "latest-stock-price.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.error(error);
      if (error) {
        res.status(200).json({ message: "Data not found!" });
      }
    });
}
