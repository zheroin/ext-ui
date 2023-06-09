import { useState } from "react"

import { usePage } from "~src/features/usePage"
import { useUser } from "~src/features/useUser"

const Setting = () => {
  const { setPage } = usePage()
  const { email, setEmail, password, setPassword, apikey, setAPIkey } =
    useUser()
  const [vemail, setVEmail] = useState(email)
  const [vpassword, setVPassword] = useState(password)
  const [vapikey, setVAPIkey] = useState(apikey)
  const handleReset = () => {
    setVEmail("")
    setVPassword("")
    setVAPIkey("")
  }
  const handleSave = () => {
    window.localStorage.setItem("user-email", vemail)
    window.localStorage.setItem("user-password", vpassword)
    window.localStorage.setItem("user-apikey", vapikey)
    setEmail(vemail)
    setPassword(vpassword)
    setAPIkey(vapikey)
  }
  const handleApply = () => {
    setEmail(vemail)
    setPassword(vpassword)
    setAPIkey(vapikey)
    setPage("client")
  }

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
                name="email"
                value={vemail}
                onChange={(e) => setVEmail(e.target.value)}
                placeholder="    info@site.com"
                className="h-8 input-bordered"
              />
            </label>
          </div>
          <div className="form-control py-1 px-9">
            <label className="input-group">
              <span className="w-16">Password</span>
              <input
                type="password"
                name="password"
                value={vpassword}
                onChange={(e) => setVPassword(e.target.value)}
                placeholder="    ************"
                className="h-8 input-bordered"
              />
            </label>
          </div>
          <div className="form-control py-1 px-9">
            <label className="input-group">
              <span className="w-16">API key</span>
              <input
                type="text"
                name="apikey"
                value={vapikey}
                onChange={(e) => setVAPIkey(e.target.value)}
                placeholder="    sk-xxxxxxxxxxxxxxxxx"
                className="h-8 input-bordered"
              />
            </label>
          </div>
          <div className="form-control py-4 flex-row justify-center space-x-4">
            <div className="btn btn-outline ring-2 w-12 btn-danger">
              <input
                type="button"
                name="reset"
                value="Reset"
                className="w-full h-full border-none  bg-transparent text-primary"
                onClick={handleReset}
              />
            </div>
            <div className="btn btn-outline ring-2 w-12 btn-primary">
              <input
                type="button"
                name="save"
                value="Save"
                className="w-full h-full border-none  bg-transparent text-primary"
                onClick={handleSave}
              />
            </div>
            <div className="btn btn-outline ring-2 w-12 btn-success">
              <input
                type="button"
                name="apply"
                value="Apply"
                className="w-full h-full border-none  bg-transparent text-primary"
                onClick={handleApply}
              />
            </div>
          </div>
          <div className="flex gap-x-2"></div>
        </form>
      </div>
    </>
  )
}
export default Setting
