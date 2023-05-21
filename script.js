import MEDALS from './data.js'

// console.log('everything is ready')

// console.log(MEDALS)
const select = document.querySelector('#country')
const current = document.querySelector('#currentDate')
window.addEventListener('DOMContentLoaded', main)

function main() {
  createOptions()
  displayData('cambodia')

  select.addEventListener('change', (e) => {
    displayData(e.target.value)
  })

  let date = new Date()
  current.innerHTML = `${date.toLocaleTimeString()} \t\t ${date.toLocaleDateString()}`

  displayTable()
}

function createOptions() {
  // const select = document.querySelector('#country')
  // console.log(select)
  select.innerHTML = ``
  MEDALS.forEach(item => {
    select.innerHTML += `<option value="${item.name}">${item.name.toLocaleUpperCase()}</option>`
  });
}



function displayData(country) {
  // const select = document.querySelector('#country')
  select.value = country
  let selectedCountry = MEDALS.find((c) => c.name == country)
  // console.log(selectedCountry)
  const medalContainer = document.querySelector('.medal-container')
  medalContainer.innerHTML = `
  <img src="./images/${selectedCountry.name}.gif" alt="">
  <div class="medal-wrapper">
    <ion-icon name="medal" class="gold"></ion-icon>
    <h3 class="gold">${selectedCountry.gold}</h3>
    <ion-icon name="medal" class="silver"></ion-icon>
    <h3 class="silver">${selectedCountry.silver}</h3>
    <ion-icon name="medal" class="bronze"></ion-icon>
    <h3 class="bronze">${selectedCountry.bronze}</h3>
    <ion-icon name="podium"></ion-icon>
    <h3>${selectedCountry.bronze + selectedCountry.silver + selectedCountry.gold }</h3>
  </div>  
  `
}

function displayTable() {
  let sortedRank = MEDALS.sort((a, b) => {
    return b.gold - a.gold
  })

  // console.log(sortedRank)
  const tbody = document.querySelector('table tbody')
  tbody.innerHTML = ``

  for(let i = 0; i < sortedRank.length; i++) {
    let country = sortedRank[i]
    tbody.innerHTML += `
    <tr>
      <td>${i+1}</td>
      <td>
        <div class="row">
          <img src="./images/${country.name}.gif" alt="">
          <p>${country.name.toLocaleUpperCase()}</p>
        </div>
      </td>
      <td>${country.gold}</td>
      <td>${country.silver}</td>
      <td>${country.bronze}</td>
      <td>${country.gold + country.silver + country.bronze}</td>
    </tr>
    `
  }
}