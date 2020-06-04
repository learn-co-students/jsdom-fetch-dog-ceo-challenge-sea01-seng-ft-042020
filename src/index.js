document.addEventListener("DOMContentLoaded", function () {
  console.log("%c HI", "color: firebrick");
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  //elements from the dom
  const dropdown = document.getElementById("breed-dropdown");
  const imgDiv = document.getElementById("dog-image-container");
  const ulElement = document.getElementById("dog-breeds");
  //building Dom elements
  //  function dogList(obj, key, value) {
  //     if (obj.keys == "a")
  //     Object.assign({}, obj )
  //  }

  function buildImg(image) {
    const img = document.createElement("img");
    img.src = image;
    imgDiv.appendChild(img);
  }
  function buildLi(item) {
    const listItem = document.createElement("li");
    listItem.innerText = item;
    ulElement.appendChild(listItem);
    listItem.addEventListener("click", function () {
      listItem.style.color = "purple";
    });
  }

  function renderLi(json) {
      ulElement.textContent = ""
    Object.keys(json.message).forEach((breed) => {
      if (json.message[breed].length == 0) {
        if (breed[0] == dropdown.value) {
          buildLi(breed);
        }
      } else {
        json.message[breed].forEach((subbreed) => {
          if (subbreed[0] == dropdown.value) {
            buildLi(subbreed + " " + breed);
          }
        });
      }
    });
  }

  function renderImg(json) {
    json.message.forEach((image) => {
      buildImg(image);
    });
  }

  //fetching

  //GET provides us with data, no changes, READ in CRUD
  function fetchDogImgs() {
    fetch(imgUrl)
      .then((resp) => resp.json())
      .then((json) => renderImg(json));
  }
  function fetchBreeds() {
    fetch(breedUrl)
      .then((resp) => resp.json())
      .then((json) => renderLi(json));
  }

  //event handlers

  //event listners
  dropdown.addEventListener("change", fetchBreeds);
  //function calls

  fetchDogImgs();
  fetchBreeds();
});
