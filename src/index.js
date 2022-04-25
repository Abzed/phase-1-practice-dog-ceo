console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', fetchDogs)

function fetchDogs(){
    fetch(imgUrl).then(res => res.json()).then(data => {
        let dogs = data.message
        handleDogs(dogs)
        fetchBreed()
    })
}

function handleDogs(dogs){
    const container = document.querySelector('div')
    const ul = document.createElement('ul')

    dogs.forEach(dog => {
        const img = document.createElement('img')
        const li = document.createElement('li')
        li.style.listStyleType = 'none'
        img.width = '200'
        img.src = dog
        li.appendChild(img)
        container.append(ul)
        ul.appendChild(li)
    })
}

function fetchBreed(){
    fetch(breedUrl).then(res => res.json()).then(data => {
        breeds = data.message
        handleBreed(breeds)
    })
}

function handleBreed(breeds){
    const ul = document.querySelector('ul')    
    for(let breed in breeds){
        const li = document.createElement('li')
        li.addEventListener('click', () => li.style.color = 'red')
        li.textContent = breed
        ul.appendChild(li)
    }
}








