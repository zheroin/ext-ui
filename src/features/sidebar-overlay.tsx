import { useState } from "react"

const SidebarToggle = () => {
  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    setIsActive(!isActive)
  }
  return (
    <>
      <div>
        <button
          className={
            isActive
              ? "hidden"
              : "translate-x-9 hover:-translate-x-0 inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
          }
          onClick={handleClick}>
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-white">LOGO</span>
        </button>
        <div
          className={
            isActive ? "fixed top-0 h-screen right-0 w-96 card " : "hidden"
          }>
          <div className="drawer drawer-mobile rounded-lg">
            <div className="drawer-side menu p-0 w-96 text-base-content bg-white ">
              <button
                className="btn btn-square btn-ghost"
                onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 bg-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SidebarToggle
