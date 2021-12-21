import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import Store from './redux/store/'
import dotenv from 'dotenv'
import axios from 'axios'

const { persistor, store } = Store

persistor.purge()

dotenv.config();

axios.defaults.URL_BASE = process.env.DATABASE_URL || 'http://localhost:3001'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

