export const Search = () => {
  return <div></div>
}
const Clients = () => {
  return (
    <div className="flex flex-col justify-center h-full max-w-full mx-auto shadow-lg rounded-sm border">
      <Search />
      <div className="p-1 overflow-x-hidden ">
        <table className="table-auto w-full text-base-content">
          <thead className="text-xs font-semibold uppercase">
            <tr>
              <th className="p-2 whitespace-nowrap w-40">
                <div className="font-semibold text-left">Name</div>
              </th>
              <th className="p-2 whitespace-nowrap w-12">
                <div className="font-semibold text-left">Role</div>
              </th>
              <th className="p-2 whitespace-nowrap w-20">
                <div className="font-semibold text-center">Country</div>
              </th>
              <th className="p-2 whitespace-nowrap w-12">
                <div className="font-semibold text-center">Action</div>
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
                  <div className="flex-col">
                    <div className="font-medium">Alex Shatov</div>
                    <div className="text-left">alexshatov@gmail.com</div>
                  </div>
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left">CEO</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-lg text-center">Austrailia</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <input type="checkbox" className="toggle toggle-success" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Clients
