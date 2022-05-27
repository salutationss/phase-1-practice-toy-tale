const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false;
let divCollect = document.querySelector('#toy-collection')


function getToy() {
  return fetch('http://localhost:3000/toys')
  .then (res => res.json())
}

function postToy(toy_data) {
  fetch('http://localhost:3000/toys', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json' ,
      Accept: "application/json"
    },
    body: JSON.stringify({
      "name": toy_data.name.value,
      "image": toy_data.image.value,
      "likes": 0
    })
  })
  .then(res => res.json())
  .then((obj_toy) => {
    let new_toy = renderToys(obj_toy)
    divCollect.append(new_toy)
  })
}

