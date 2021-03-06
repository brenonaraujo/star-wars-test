import http from '@/http'

export const getPeoples = () => {
  return http.get('https://swapi.co/api/people')
  .then(response => response.data)
}

export const getData = (page) => {
  return http.get(page)
  .then(response => response.data)
}
