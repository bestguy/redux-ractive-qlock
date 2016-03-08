import { createStore } from 'redux'
import time from './reducers/time.js'
import Clock from './components/Clock.js'
import Ractive from 'ractive'

const store = createStore(time)

const app = new Ractive({
  el: '#root',
  components: {
    Clock
  },
  data: {
    store
  },
  template: `<Clock time={{store.getState()}}></Clock>`
});

setInterval(() => {
  store.dispatch({ type: 'TICK', now: new Date() })
}, 3000)

store.subscribe(() => app.update())
