// console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded")
    fetchImages();
    fetchDogBreeds();
})


function fetchImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(data => data.message.forEach(message => showImage(message)))
}

function showImage(message) {
    const imgContainer = document.querySelector("#dog-image-container")
    const newImage = document.createElement("img")
    newImage.src = message

    imgContainer.appendChild(newImage)
}

function fetchDogBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => {
        keyBreeds = Object.keys(data.message);
        keyBreeds.forEach(breed => showBreed(breed));
    })
}

function showBreed(breed) {
    const dogBreedUl = document.querySelector("#dog-breeds")
    const dogBreedLi = document.createElement("li")
    dogBreedLi.innerHTML = breed
    
    dogBreedUl.appendChild(dogBreedLi)
    changeFontColor(dogBreedLi)
    selectLetter(dogBreedLi)
}

function changeFontColor(dogBreedLi){
    dogBreedLi.addEventListener("click", function(e){
        if (dogBreedLi.style.color == "") {
            dogBreedLi.style.color = "green"
        } else {
            dogBreedLi.style.color = ""
        }
    })
}

function selectLetter(dogBreedLi) {
    const breedDropdown = document.querySelector("#breed-dropdown")
    
    breedDropdown.addEventListener('change', function(e) {
        const selectedElement = e.target.value
        if (dogBreedLi.innerHTML.startsWith(selectedElement)) {
            dogBreedLi.style.display = ""
        } else {
            dogBreedLi.style.display = "none"
        }
    })
}