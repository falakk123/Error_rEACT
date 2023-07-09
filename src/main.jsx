import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import CartContextProvider from './context/addtoCart/context.jsx';


export const GlobalContext = createContext("Initial Value")
const contextData = {
  username: "Falak Arif"
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalContext.Provider value={{ contextData }}>
  <CartContextProvider>
        <BrowserRouter>
        <React.StrictMode>
          <App />
          </React.StrictMode>
        </BrowserRouter>
    </CartContextProvider>
  </GlobalContext.Provider>


)
