console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

const images = document.getElementById("dog-image-container")
const ulElement = document.getElementById("dog-breeds");
const breedDropdown = document.getElementById("breed-dropdown");

function buildImage(image) {
    const img = document.createElement("img")
    img.src = image
    images.appendChild(img)
}

function buildLi(item) {
    const listItem = document.createElement("li");
    listItem.innerText = item;
    listItem.addEventListener("click", () => {
        listItem.style.color = "green"
    })
    ulElement.appendChild(listItem);
}

function renderLi(json) {
    ulElement.textContent = ""
    // Object.keys puts json.message's keys into new array
    Object.keys(json.message).forEach((breed) => {
        if (json.message[breed].length == 0) {
            if (breed[0] == breedDropdown.value) {
                buildLi(breed);
            }
        } else {
            json.message[breed].forEach((subbreed) => {
                if (subbreed[0] == breedDropdown.value) {
                    buildLi(subbreed + " " + breed);
                }
            });
        }
    });
}

function showImages(object) {
    object.message.forEach(image => {
        buildImage(image)
    });
}

function fetchImages() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => showImages(json))
}

function fetchBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderLi(json));
}

breedDropdown.addEventListener("change", fetchBreeds);

    fetchImages()
    fetchBreeds()
})