
// Fetch the data from the API
fetch(`${apiEndpoint}?${new URLSearchParams(params)}`, {
  headers: {
    'Authorization': `_Pykip2zx8FztpwNwUsX`
  }
})
.then(response => response.json())
.then(data => {
  // Get the table element
  const table = document.getElementById('securities');

  // Loop through the securities and add them to the table
  data.data.securities.forEach(security => {
    // Create a new row
    const row = document.createElement('tr');

    // Create the security cell and add it to the row
    const securityCell = document.createElement('td');
    securityCell.textContent = security.name;
    row.appendChild(securityCell);

    // Create the market cap cell and add it to the row
    const marketCapCell = document.createElement('td');
    marketCapCell.textContent = security.marketCap;
    row.appendChild(marketCapCell);

    // Add the row to the table
    table.appendChild(row);
  });
})
.catch(error => console.error('Error:', error));