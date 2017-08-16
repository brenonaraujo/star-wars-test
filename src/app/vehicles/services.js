import http from '@/http'

export const getVehicles = () => {
  return http.get('https://swapi.co/api/vehicles')
  .then(response => response.data)
}

export const getPage = (page) => {
  return http.get(page)
  .then(response => response.data)
}
