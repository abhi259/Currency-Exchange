import { useNavigate } from "react-router-dom"

export default function Login({ userDetails, setUserDetails }) {
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    if (
      event.target.email.value.includes("@" && ".com") &&
      event.target.name.value.length > 0
    ) {
      console.log("correctEmail")
      setUserDetails({
        userName: event.target.name.value,
        userEmail: event.target.email.value,
      })
      localStorage.setItem(
        "localUserDetails",
        JSON.stringify({
          userName: event.target.name.value,
          userEmail: event.target.email.value,
        })
      )

      navigate("/currencyExchange")
    } else {
      alert("Please Enter a vaiid Name & Email ID ")
    }

    event.preventDefault()
  }

  return (
    <div className="flex justify-center items-center h-screen bg-[#202020] ">
      <form
        onSubmit={handleSubmit}
        className="text-xl bg-[#313131] p-9 m-10 rounded-lg shadow-inner shadow-[#000000]"
      >
        <div className="flex justify-between items-center text-gray-200">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="w-48 rounded-md ml-4 pl-2 text-slate-800 h-10"
            placeholder="Enter your name "
          />
        </div>
        <br />
        <div className="flex justify-between items-center text-gray-200">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="w-48 rounded-md ml-4 pl-2 h-10 text-slate-800  "
            placeholder="Enter your email"
          />
        </div>

        <div className="flex justify-center mt-5">
          <button
            className="bg-white hover:bg-gray-400 active:bg-gray-600 text-gray-600 font-semibold py-2 px-4 border border-none rounded-md shadow "
            type="email"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
