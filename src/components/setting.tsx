import { usePage } from "~src/features/usePage"

const Setting = () => {
  const { page, setPage } = usePage()
  return (
    <>
      <div className=" mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">User Setting</h1>
        <form className="max-w-sm mx-auto px-1 py-8 rounded-md shadow-md flex-col ">
          <div className="form-control py-1 px-9">
            <label className="input-group">
              <span className="w-16">Email</span>
              <input
                type="text"
                placeholder="info@site.com"
                className="h-8 input-bordered"
              />
            </label>
          </div>
          <div className="form-control py-1 px-9">
            <label className="input-group">
              <span className="w-16">Password</span>
              <input
                type="password"
                placeholder="************"
                className="h-8 input-bordered"
              />
            </label>
          </div>
          <div className="form-control py-1 px-9">
            <label className="input-group">
              <span className="w-16">API key</span>
              <input
                type="text"
                placeholder="sk-xxxxxxxxxxxxxxxxx"
                className="h-8 input-bordered"
              />
            </label>
          </div>
          <div className="form-control py-4 flex-row justify-center space-x-4">
            <div className="btn btn-outline ring-2 w-12 btn-danger">Cancel</div>
            <div className="btn btn-outline ring-2 w-12 btn-primary">Save</div>
            <div className="btn btn-outline ring-2 w-12 btn-success">Apply</div>
          </div>
        </form>
      </div>
    </>
  )
}
export default Setting
