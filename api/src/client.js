const client = {

  get: async (id) => {
    const url = `${process.env.API_URL}/${id}`
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
