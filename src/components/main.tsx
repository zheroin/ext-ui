import React, { useState } from "react"

import { PageContext } from "~src/features/PageContext"

const Card = () => {
  const [data, setData] = useState()
  return (
    <div className="stats shadow-lg overflow-x-hidden artboard">
      <div className="stat">
        <div className="stat-title">Registers</div>
        <div className="stat-value">4,200</div>
        <div className="stat-desc">↗︎ 400 (22%)</div>
      </div>
      <div className="stat">
        <div className="stat-title">New Users</div>
        <div className="stat-value">100</div>
        <div className="stat-desc">↗︎ 400 (22%)</div>
      </div>
    </div>
  )
}
const ClientTable = () => {
  return (
    <div className="flex flex-col justify-center h-full max-w-full mx-auto shadow-lg rounded-sm border">
      <header className="px-5 py-4 border-b border-gray-100 flex justify-center ">
        <Card />
      </header>
      <div className="p-1 overflow-x-hidden ">
        <table className="table-auto w-full text-base-content">
          <thead className="text-xs font-semibold uppercase">
            <tr>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Name</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Email</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-center">Country</div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-100">
            <tr>
              <td className="p-2 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                    <img
                      className="rounded-full"
                      src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                      width="40"
                      height="40"
                      alt="Alex Shatov"
                    />
                  </div>
                  <div className="font-medium">Alex Shatov</div>
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left">alexshatov@gmail.com</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-lg text-center">Austrailia</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
const Skelton = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  )
}
const Page = () => {
  return (
    <PageContext.Consumer>
      {({ page, setPage }) => {
        switch (page) {
          case "clients":
            return <ClientTable />
          default:
            break
        }
      }}
    </PageContext.Consumer>
  )
}
export default Page
