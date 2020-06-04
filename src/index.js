console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const imgList = document.querySelector("#dog-image-container")

    console.log(imgList)

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
    fetchDogs()
})