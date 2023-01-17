const formatPlaceDataResponse = (data) => {
  if (typeof data === 'string') {
    const error = new Error(data)
    error.name = "Not Found" // catch all, can do more parsing here of XML
    throw error
  } else {
    return {
      name: data.displayed_what,
      address: data.displayed_where,
      openingHours:  data.opening_hours,
    }
  }
}

module.exports = formatPlaceDataResponse
