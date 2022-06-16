const pickupLine = document.getElementById('PLine')
const pickupLineButton = document.getElementById('pLineBtn')
pickupLineButton.addEventListener('click', generatePickUpLine)
const url =
 'https://twitter-scraper2.p.rapidapi.com/api/v2/search?allOfTheseWords=Hey%20girl%20Cuz%20&lang=en&fromTheseAccounts=%40Rutvikk05&fromDate=2022-01-01&searchMode=live'
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cff20a77d0msh899191bba8e5c6ap101fcajsnc53377c0c29b',
    'X-RapidAPI-Host': 'twitter-scraper2.p.rapidapi.com',
  },
}

async function generatePickUpLine() {
  const response = await fetch(url, options)
  const data = await response.json()
  console.log(data)
}

/*const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cff20a77d0msh899191bba8e5c6ap101fcajsnc53377c0c29b',
		'X-RapidAPI-Host': 'twitter-scraper2.p.rapidapi.com'
	}
};

fetch('https://twitter-scraper2.p.rapidapi.com/api/v2/search?allOfTheseWords=Hey%20girl%20Cuz&lang=en&fromTheseAccounts=%40rutvikk05&searchMode=live', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err)); 
 /*
