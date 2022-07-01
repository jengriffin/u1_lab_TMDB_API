const API_KEY = 'fa11479ae007c2823d92000852ac557d'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'
const button = document.querySelector('button')
const input = document.querySelector('input')
let searchResults = document.querySelector('.movie-list')

button.addEventListener('click', async () => {
  let search = input.value
  // console.log(search)
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=fa11479ae007c2823d92000852ac557d`
  )
  console.log(response)
  let movieList = response.data.results
  const renderList = (arr) => {
    console.log(renderList)
    arr.forEach((movie) => {
      let movieItem = document.createElement('div')
      movieItem.innerHTML = `<img src= https://image.tmdb.org/t/p/original${movie.poster_path}>`
      let title = document.createElement('h2')
      title.innerHTML = `${movie.original_title}`
      searchResults.append(movieItem)
      searchResults.append(title)
    })
  }
  renderList(movieList)
})
