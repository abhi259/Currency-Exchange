import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import Login from "./Components/Login"
import CurrencyExchange from "./Components/CurrencyExchange/CurrencyExchange"
import NotFound from "./Components/NotFound/NotFound"
import { BrowserRouter } from "react-router-dom"

function App() {
  const [userDetails, setUserDetails] = useState()

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Login userDetails={userDetails} setUserDetails={setUserDetails} />
          }
        />

        <Route
          exact
          path="/currencyExchange"
          element={<CurrencyExchange userDetails={userDetails} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
