const API_KEY = '03676832f955ae00b509c34edbaad5f5'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'
const button = document.querySelector('button')
const picture = document.getElementsByClassName('movie-list')
const searchInput = document.querySelector('input')

button.addEventListener('click', async () => {
  let search = searchInput.value
  const response = await axios.get(
    'https://api.themoviedb.org/3/search/movie?query=[]&api_key=03676832f955ae00b509c34edbaad5f5'
  )
  let screen = response.data.results[0].title
  picture.innerHtml = `<img`
  console.log(screen)
})
