console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display dog breeds
    const breedsUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedsUrl)
    .then(response => response.json())
    .then(json => {
        for (const breed in json["message"]) {
            let breedTag = document.createElement('li')
            breedTag.innerText = breed
            document.querySelector('ul#dog-breeds').appendChild(breedTag)
        }
        // Assign random color listener
        const dogBreeds = document.querySelectorAll('ul#dog-breeds > li')
        for (const dogBreed of dogBreeds) {
            dogBreed.addEventListener("click", function(event) {
                event.target.style.color = "red"
            })
        }
        // Filter dog breed list
        document.getElementById("breed-dropdown").addEventListener("change", function(event) {
            for (const dogBreed of dogBreeds) {
                if (dogBreed.innerText[0] === event.target.value) {
                    dogBreed.hidden = false
                } else {
                    dogBreed.hidden = true
                }
            }
        })
    })

    // Fetch and display dog images
    const randomimgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(randomimgUrl)
    .then(response => response.json())
    .then(json => {
        for (const imgUrl of json["message"]) {
            const imgTag = document.createElement("img")
            imgTag.src = imgUrl
            document.body.append(imgTag)
        }
    })
})