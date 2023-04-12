import NavbarList from "./navlist"

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 p-0 h-6 relative rounded-lg drop-shadow-md">
      <ul className="menu p-0 menu-horizontal bg-base-100 space-x-1 rounded-box w-[480px] flex justify-between">
        <NavbarList />
      </ul>
    </div>
  )
}
export default Navbar
