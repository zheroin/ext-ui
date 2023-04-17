export const ErrorHandler = (err) => {
  console.log(err)
}
export const asyncError = (f) => {
  f().catch((error) => {
    ErrorHandler(error)
  })
}
