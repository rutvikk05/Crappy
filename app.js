const pickupLine = document.getElementById('PLine');
const pickupLineButton = document.getElementById('PLineButton');

pickupLineButton.addEventListener('click', () => generatePickupLine());

generatePickupLine();




const options = {
    method: 'GET',
	headers: {
        'X-RapidAPI-Key': '9471d7bc0fmsh7dbb39fb9f8f612p1029eejsn01706ecf6dff',
		'X-RapidAPI-Host': 'twitter-scraper2.p.rapidapi.com'
	}
};

fetch('https://twitter-scraper2.p.rapidapi.com/api/v2/search?allOfTheseWords=Hey%20girl%20Cuz&lang=en&fromTheseAccounts=%40rutvikk05&fromDate=2022-01-01&searchMode=live', options)
	.then(response => response.json())
	.then(response => {
        console.log(response);

    })
	.catch(err => console.error(err));
