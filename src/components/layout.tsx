import React from "react"

import Chatroom from "./chatroom"
import Footer from "./footer"
import Main from "./main"
import Navbar from "./navbar"

const Layout = () => {
  return (
    <>
      <div className="fixed top-0 h-screen ring-2 right-1 drop-shadow-md w-[480px] md:drop-shadow-xl text-indigo-600  drawer drawer-mobile min-w-96 border-4 border-indigo-600 rounded-lg">
        <div className="drawer-side menu p-0  text-base-content bg-base-100">
          <Navbar />
          <div className="grid p-1 m-2">
            <Main />
          </div>
          <div className="bottom-10 ">
            <Chatroom />
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
