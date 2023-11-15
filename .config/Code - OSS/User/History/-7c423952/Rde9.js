// Define the API endpoint and headers for oil prices
const oilUrl = 'https://www.quandl.com/api/v3/datasets/CHRIS/CME_CL1.json';
const oilParams = new URLSearchParams({
    api_key: '_Pykip2zx8FztpwNwUsX',
    start_date: '2000-01-01',  // Modify as needed
    end_date: new Date().toISOString().split('T')[0],  // Today's date
});

// Send a GET request to the oil price API
fetch(`${oilUrl}?${oilParams}`)
    .then(response => response.json())
    .then(oilData => {
        // Extract the dates and prices into separate arrays
        const dates = oilData.dataset.data.map(item => new Date(item[0]));
        const prices = oilData.dataset.data.map(item => item[1]);

        // Initialize an array to store the adjusted prices
        const adjustedPrices = [];

        // Iterate over the dates and prices
        for (let i = 0; i < dates.length; i++) {
            // Calculate the number of years since the date of the price
            const years = (new Date() - dates[i]) / (1000 * 60 * 60 * 24 * 365.25);

            // Calculate the adjusted price
            const adjustedPrice = prices[i] * ((1 + 0.025) ** years);

            // Append the adjusted price to the array
            adjustedPrices.push(adjustedPrice);
        }

        // Create a line chart with Chart.js
        const ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    label: 'Nominal Price',
                    data: prices,
                    borderColor: 'rgb(75, 192, 192)',
                    fill: false,
                }, {
                    label: 'Inflation-Adjusted Price',
                    data: adjustedPrices,
                    borderColor: 'rgb(255, 99, 132)',
                    fill: false,
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'Oil Price Over Time'
                },
                scales: {
                    xAxes: [{
                        type: 'time',
                        time: {
                            unit: 'year'
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Date'
                        }
                    }],
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Price'
                        }
                    }]
                }
            }
        });
    });
