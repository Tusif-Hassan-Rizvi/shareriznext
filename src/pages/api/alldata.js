const axios = require("axios");

export default function handler(req, res) {
    const options = {
        method: 'GET',
        url: 'https://latest-stock-price.p.rapidapi.com/any',
        headers: {
          'X-RapidAPI-Key': 'baed0f0ab7msh233268c70b5b296p1281c7jsncb4e068d88ab',
          'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
        }
      };
    
    axios.request(options).then(function (response) {
        res.status(200).json(response.data)
    }).catch(function (error) {
        console.error(error);
        if(error){

            res.status(200).json({ message: 'no data found!' })
        }
    });
   
  }