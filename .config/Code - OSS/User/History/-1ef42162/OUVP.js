import './style.css'


        const API_KEY = 'YOUR_API_KEY';
        const NASDAQ_DATA_LINK_URL = `https://data.nasdaq.com/api/v3/datasets/EIA/PET_RWTC_D.json?api_key=${API_KEY}`;

        axios.get(NASDAQ_DATA_LINK_URL)
            .then(response => {
                const data = response.data;
                const latestData = data.dataset.data[0];
                const date = latestData[0];
                const price = latestData[1];

                // Create an h1 element and set its text content
                const h1 = document.createElement('h1');
                h1.textContent = `Date: ${date}, WTI Crude Oil Price: ${price}`;

                // Append the h1 element to the div
                document.getElementById('priceDisplay').appendChild(h1);
            })
            .catch(error => {
                console.error(`Error: ${error}`);
            });



document.querySelector('#app').innerHTML = `
  <div>
   
  <div id="priceDisplay"></div>


  </div>
`




