const pickupLine = document.getElementById('pLine')
const pickupLineButton = document.getElementById('pLineBtn')
pickupLineButton.addEventListener('click', generatePickUpLine)
const url =
  'https://twitter-scraper2.p.rapidapi.com/api/v2/search?allOfTheseWords=Hey%20girl%20Cuz&lang=en&fromTheseAccounts=%40rutvikk05&fromDate=2022-01-01&searchMode=live'
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9471d7bc0fmsh7dbb39fb9f8f612p1029eejsn01706ecf6dff',
    'X-RapidAPI-Host': 'twitter-scraper2.p.rapidapi.com',
  },
}

async function generatePickUpLine() {
  const response = await fetch(url, options)
  const data = await response.json()
  console.log(data)
}
