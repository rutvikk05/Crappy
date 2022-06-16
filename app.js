const pickupLine = document.getElementById('pLine')
const pickupLineButton = document.getElementById('pLineBtn')
pickupLineButton.disabled = true
pickupLineButton.addEventListener('click', getRandomPickUpLine)
const spinnerContainer = document.querySelector('.spinner-container')

const url =
  'https://twitter-scraper2.p.rapidapi.com/api/v2/search?allOfTheseWords=Hey%20girl&lang=en&fromTheseAccounts=%40rutvikk05&searchMode=live'
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cff20a77d0msh899191bba8e5c6ap101fcajsnc53377c0c29b',
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
