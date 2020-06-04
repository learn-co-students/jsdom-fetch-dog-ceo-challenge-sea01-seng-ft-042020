console.log('%c HI', 'color: firebrick')

const imgUrl = ("https://dog.ceo/api/breeds/image/random/4")
const breedUrl = ("https://dog.ceo/api/breeds/list/all")

function fetchImages (url) {
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(json) {
        showImages(json);
    }) 
}

function fetchBreeds (url) {
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(json) {
        showBreeds(json);
    }) 
}

document.addEventListener("DOMContentLoaded", () => {
    fetchImages(imgUrl)
    fetchBreeds(breedUrl)

    document.getElementById("breed-dropdown").addEventListener("change", redText);

})

document.addEventListener("DOMContentLoaded", () => {
})

function showImages (imageArray) {
    imageArray.message.map((image) => {
      addImage(image);
    });
  }

function addImage(image) {
    const newImage = document.createElement("img");
    newImage.src = image;
    newImage.height = 200;
    document.getElementById("dog-image-container").appendChild(newImage);

}

function addBreed(listItem) {
    const newBreed = document.createElement("li");
    newBreed.textContent = listItem;
    newBreed.addEventListener("click", () => {
     newBreed.style.color="blue"})
    document.getElementById("dog-breeds").appendChild(newBreed);

}

function showBreeds(breedArray) {
    for (const key in breedArray.message) {
        addBreed(key);
    }
}
   

function redText () {
    const list = document.querySelectorAll("li");
    const selectorValue = document.querySelector("#breed-dropdown");
    const sv = selectorValue.options[selectorValue.selectedIndex].value;
    console.dir(selectorValue);
    list.forEach (function (listItem) {
    // console.dir(listItem)
    if (listItem.textContent.charAt(0) == sv) {
      listItem.style.display = "block";
    }
    else {
        listItem.style.display = "none";
    }
  })
}



