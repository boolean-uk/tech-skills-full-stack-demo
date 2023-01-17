const apiUrl = 'https://storage.googleapis.com/coding-session-rest-api' // move to env var

const client = {

  get: async (id) => {
    const url = `${apiUrl}/${id}`
    const res = await fetch(url)

    const contentType = res.headers.get("content-type")

    if (contentType === 'application/json') {
      return await res.json()
    } else {
      return await res.text()
    }
  }

}

module.exports = client
