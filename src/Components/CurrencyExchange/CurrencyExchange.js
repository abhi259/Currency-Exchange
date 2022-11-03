import { useState, useEffect } from "react"
import axios from "axios"
import PacmanLoader from "react-spinners/PacmanLoader"
import TablePage from "./TablePage"

export default function CurrencyExchange({ userDetails }) {
  const [loading, setLoading] = useState(true)
  const [currency, setCurrency] = useState()

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://exchangerate-api.p.rapidapi.com/rapid/latest/USD",
      headers: {
        "X-RapidAPI-Key": "87d3180dd6msh6f826eac052c18dp17b0a5jsndf91f6c64d17",
        "X-RapidAPI-Host": "exchangerate-api.p.rapidapi.com",
      },
    }
    axios
      .request(options)
      .then(function (response) {
        setCurrency(response.data.rates)
        setTimeout(() => {
          setLoading(false)
        }, 2000)
        console.log("aaa")
        localStorage.setItem(
          "localCurrency",
          JSON.stringify(response.data.rates)
        )
      })
      .catch(function (error) {
        console.error("error")
      })
  }, [])

  return (
    <div className="m-0 p-0 ">
      {loading && (
        <div className="bg-[#1e1e1e] h-screen flex justify-center items-center pr-10">
          <div   >
            <PacmanLoader color="#cccccc" size={50} />
          </div>
        </div>
      )}
      {!loading && (
        <div className="bg-[#1e1e1e] bg-cover min-h-screen w-screen  flex justify-center items-center text-white pt-20 ">
          <TablePage
            loading={loading}
            setLoading={setLoading}
            currency={currency}
            setCurrency={setCurrency}
            userDetails={userDetails}
          />
        </div>
      )}
    </div>
  )
}
