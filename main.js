// Dog API

const button1 = document.querySelector("#dogButton")

button1.addEventListener('click', () => {

    const img = document.querySelector("#img1")

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(httpResponse => {
            return httpResponse.json()
        })
        .then(data => {
            img.src = data.message
            // console.log(data.message)
        })

})

// Weather API

const button2 = document.querySelector("#weatherButton")

button2.addEventListener('click', () => {

    const city = document.querySelector("#inputCity")
    const temp = document.querySelector("#temp")
    const wind = document.querySelector("#wind")
    const description = document.querySelector("#description")

    fetch(`https://goweather.herokuapp.com/weather/${city.value}`)
    .then(httpResponse => {
        return httpResponse.json()
    })
    .then(data => {
        temp.innerText = `Temperature: ${data.temperature}`
        wind.innerText = `Wind: ${data.wind}`
        description.innerText = `Description: ${data.description}`
        // console.log(data)
    })

})