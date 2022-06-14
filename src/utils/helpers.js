export const asyncCallback = async (callback) => {
  return new Promise((resolve, reject) => {
    if (callback) callback()
    setTimeout(() => {
      resolve('done')
    }, 1000)
  })
}