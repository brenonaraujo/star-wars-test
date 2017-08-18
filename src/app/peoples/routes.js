import Detail from './components/people-detail'
import List from './components/peoples-list'

export default [
  { path: '/peoples', component: List, name: 'peoples.list' },
  { path: '/peoples/detail', component: Detail, name: 'peoples.detail' }
]
