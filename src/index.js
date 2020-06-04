console.log("%c HI", "color: firebrick");

document.addEventListener("DOMContentLoaded", function () {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const imgList = document.querySelector("#dog-image-container");
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  const breedList = document.getElementById("dog-breeds");
  const selectBreed = document.getElementById("breed-dropdown");

  function fetchDogs() {
    fetch(imgUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        for (i of json.message) {
          const img = document.createElement("img");
          img.src = i;
          imgList.appendChild(img);
        }
      });
  }
  function fetchBreeds() {
    fetch(breedUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        for (i in json.message) {
          // "in" because this is an object not an array
          const li = document.createElement("li");
          li.innerText = i;
          breedList.appendChild(li);
          li.addEventListener("click", function () {
            li.style.color = "red";
          });
        }
      });
  }

  selectBreed.addEventListener("change", function (event) {
    // "change" refers to clicking an option from the dropdown
    const letter = selectBreed.value;
    const lis = breedList.querySelectorAll("li");
    for (li of lis) {
      if (letter == "all") {
        li.style.display = "block";
      } else if (li.innerText[0] != letter) {
        li.style.display = "none";
      } else {
        li.style.display = "block";
      }
    }
  });

  fetchDogs();
  fetchBreeds();
});
