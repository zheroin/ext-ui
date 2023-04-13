const Top = () => {
  return (
    <header className="px-5 py-4 border-b flex justify-center light:border-black border-white">
      <div className="stats shadow-lg overflow-x-hidden">
        <div className="stat focus:outline-none">
          <div className="stat-title text-lg ">Company</div>
          <div className="stat-value">+4</div>
          <div className="stat-desc">↗︎ 21</div>
        </div>
        <div className="stat focus:outline-none">
          <div className="stat-title text-lg">Client</div>
          <div className="stat-value">+100</div>
          <div className="stat-desc">↗︎ 413</div>
        </div>
      </div>
    </header>
  )
}
export default Top
