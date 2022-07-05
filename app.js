const pickupLine = document.getElementById('pLine')
const pickupLineButton = document.getElementById('pLineBtn')
pickupLineButton.disabled = true
pickupLineButton.addEventListener('click', getRandomPickUpLine)
const spinnerContainer = document.querySelector('.spinner-container')

const url =
  'https://twitter-scraper2.p.rapidapi.com/api/v2/search?allOfTheseWords=Hey%20girl%20Cuz&lang=en&fromTheseAccounts=%40Rutvikk05&fromDate=2022-01-01&toDate=2050-06-16&searchMode=live'
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key':  'de65a4c339msh9ac918ad4934a43p1475ebjsnc6780b4a2b69',
    'X-RapidAPI-Host': 'twitter-scraper2.p.rapidapi.com',
  },
}
let pickupLinesResult = []
async function generatePickUpLine() {
  try {
    const response = await fetch(url, options)
    const { data } = await response.json()
    data.forEach((item) => {
      const {
        tweet: { full_text },
      } = item
      pickupLinesResult.push(full_text)
    })
    pickupLineButton.disabled = false
    spinnerContainer.style.display = 'none'
  } catch (error) {
    console.log(`There was an error fetching data`)
  }
}

function getRandomPickUpLine() {
  const random =
    pickupLinesResult[Math.floor(Math.random() * pickupLinesResult.length)]
  pickupLine.innerText = random
}
generatePickUpLine()
