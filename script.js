const API_KEY = '03676832f955ae00b509c34edbaad5f5'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'
const button = document.querySelector('button')
const picture = document.querySelector('.movie-list')
const searchInput = document.querySelector('input')

button.addEventListener('click', async () => {
  let search = searchInput.value
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${API_KEY}`
  )
  let films = response.data.results

  console.log(response)
  renderList(films)
})

function renderList(arr) {
  console.log(arr)
  for (i = 0; i < arr.length; i++) {
    let li = document.createElement('li')
    li.innerHTML = arr[i].original_title
    picture.appendChild(li)
    let image = document.createElement('img')
    image.src = `${IMAGE_BASE_PATH}/${arr[i].poster_path}`
    li.appendChild(image)
  }
}
