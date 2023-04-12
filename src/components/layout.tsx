import React from "react"

import Footer from "./footer"
import Main from "./main"
import Navbar from "./navbar"

const Layout = () => {
  return (
    <>
      <div className="fixed top-0 h-screen right-1 w-[480px] drop-shadow-md md:drop-shadow-xl text-indigo-600  drawer drawer-mobile min-w-96 border-4 border-indigo-600 rounded-lg">
        <div className="drawer-side menu p-0  text-base-content bg-base-100 w-[480px]">
          <Navbar />
          <div className="grid p-1 m-2">
            <Main />
          </div>
          <div className="h-10 btm-nav">
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
export default Layout
