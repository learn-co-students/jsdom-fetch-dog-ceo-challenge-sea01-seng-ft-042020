console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

let breedsCollection = {}

function dogFetch() {
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => {
            addDogs(json.message)
        })
}

function breedFetch() {
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => {
            breedsCollection = json.message
            addBreeds(breedsCollection)
        })
}

function addDogs(dogImages) {
    for (const image of dogImages) {
        const dogImg = document.createElement('img')
        dogImg.src = image 
        document.getElementById("dog-image-container").appendChild(dogImg)
    }
}

function addBreeds(breedList) {
    document.getElementById('dog-breeds').innerHTML = ''
    for (const entry in breedList) {
        const listItem = document.createElement('li')
        listItem.innerHTML = entry
        listItem.addEventListener('click', changeTextColor, false)
        document.getElementById("dog-breeds").appendChild(listItem)
    }
}

function changeTextColor() {
    let listItems = document.getElementById('dog-breeds').children
    for (const item of listItems) {
        item.style.color = 'black'
    }
    this.style.color = "red"
}

function addDropdownListener() {
    let dropDown = document.getElementById('breed-dropdown')
    dropDown.addEventListener('change', handleDropdownChange, false)
}

function handleDropdownChange() {
    let dropDown = document.getElementById('breed-dropdown')
    const letter = dropDown.value
    const collection = {}
    for (breed in breedsCollection) {
        if (breed[0] === letter) {
            collection[breed] = []
        }
    }
    console.log(collection)
    console.log(breedsCollection)
    addBreeds(collection)
}

function generateDropdownSelections() {
    let menu = document.getElementById('breed-dropdown')

    for(i=97; i < 123; i++) {
        let option = document.createElement('option')
        option.value = String.fromCharCode(i)
        option.innerText = `${String.fromCharCode(i)}`
        menu.appendChild(option)
    }
}

function getData() {
    dogFetch()
    breedFetch()
    generateDropdownSelections()
    addDropdownListener()
}

window.addEventListener('load', getData, false)
