const apiUrl = 'http://localhost:3030' // move to env var

const client = {

  get: async (path) => {
    const url = `${apiUrl}${path}`
    const res = await fetch(url)
    return await res.json()
  }

}

export default client
