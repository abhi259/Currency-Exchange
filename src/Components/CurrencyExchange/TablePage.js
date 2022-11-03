import { useNavigate } from "react-router-dom"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export default function TablePage() {
  const userDetails = JSON.parse(localStorage.getItem("localUserDetails"))
  const currency = JSON.parse(localStorage.getItem("localCurrency"))
  const navigate1 = useNavigate()
  const currencyList = ["INR", "JPY", "PHP", "RUB", "TWD"]
  const updatedData = []
  const date = new Date()
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

  if (currency) {
    currencyList.map((eachItem, index) =>
      updatedData.push({
        currencyName: eachItem,
        currencyValue: currency[currencyList[index]],
      })
    )
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900 rounded-md p-5 border-none">
          <p>{`${label} : ${payload[0].value}`}</p>
        </div>
      )
    }
    return null
  }

  const exitHandler = () => {
    localStorage.clear()
    navigate1("/")
  }

  return (
    <div className="w-[300px] lg:w-[700px] ">
      <div className="mb-10    text-sm lg:flex lg:justify-between ">
        <h1 className="text-2xl mb-5">
          Hello <br />
          <span className="text-5xl  text-cyan-500">
            {userDetails.userName}
          </span>
        </h1>
        <div className="bg-[#313131]  p-4 rounded-xl  shadow-inner shadow-[#000000] ">
          <h1>{`User Name: ${userDetails.userName}`}</h1>
          <h1>{`User Email: ${userDetails.userEmail}`}</h1>
          <h1>{`Last Updated: ${showTime}`}</h1>
        </div>
      </div>
      <div className="flex justify-center  ">
        <div className=" w-[300px] lg:w-[700px] flex justify-center  bg-[#272727]   rounded-xl shadow-inner shadow-[#000000] pt-5 pb-10  ">
          <ResponsiveContainer width="90%" height={400}>
            <BarChart
              width={900}
              height={400}
              data={updatedData}
              margin={{
                top: 20,
              }}
            >
              <Tooltip cursor={false} content={<CustomTooltip />} />
              <XAxis
                dataKey="currencyName"
                name="name"
                tick={{
                  stroke: "#6c757d",
                  strokeWidth: 1,
                  fontSize: 15,
                  fontFamily: "Roboto",
                }}
              />
              <YAxis
                tick={{
                  stroke: "#6c757d",
                  strokeWidth: 0.5,
                  fontSize: 15,
                  fontFamily: "Roboto",
                }}
              />
              <Legend
                wrapperStyle={{
                  paddingTop: 20,
                  textAlign: "center",
                  fontSize: 16,
                  fontFamily: "Roboto",
                }}
              />

              <Bar
                dataKey="currencyValue"
                name="Currency Value"
                fill="#7800A5"
                radius={[5, 5, 0, 0]}
                barSize="20%"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="flex justify-center m-10">
        <button
          className="bg-white hover:bg-gray-400 active:bg-gray-600 text-gray-600 font-semibold py-2 px-4 border border-none rounded shadow "
          type="button"
          onClick={exitHandler}
        >
          Exit
        </button>
      </div>
    </div>
  )
}
