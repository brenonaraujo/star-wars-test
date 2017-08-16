import http from '@/http'

export const getPlanets = () => {
  return http.get('https://swapi.co/api/planets')
  .then(response => response.data)
}

export const getPage = (page) => {
  return http.get(page)
  .then(response => response.data)
}
