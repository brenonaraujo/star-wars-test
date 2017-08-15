import {routes as app} from '../app'

const root = [
  {path: '/', redirect: 'peoples'}
]

export default [ ...root, ...app ]
