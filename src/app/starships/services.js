import http from '@/http'

export const getStarships = () => {
  return http.get('https://swapi.co/api/starships')
  .then(response => response.data)
}

export const getPage = (page) => {
  return http.get(page)
  .then(response => response.data)
}
