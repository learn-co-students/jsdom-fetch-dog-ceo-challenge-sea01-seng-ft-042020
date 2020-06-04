console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const imgList = document.querySelector("#dog-image-container")
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const breedList = document.getElementById("dog-breeds")

    function fetchDogs () {
        fetch(imgUrl)
        .then(function(response) {
            return response.json()
        }) .then(function(json) {
            for (i of json.message){
                const img = document.createElement("img");
                img.src = i;
                imgList.appendChild(img);
            }
        })
    }
    function fetchBreeds() {
        fetch(breedUrl)
        .then(function(response) {
            return response.json()
        }) .then(function(json) {
            for ( i in json.message){
            // "in" because this is an object not an array
                const list = document.createElement("li");
                list.innerText = i;
                breedList.appendChild(list);
            }
        })
    }
    fetchDogs()
    fetchBreeds()
})