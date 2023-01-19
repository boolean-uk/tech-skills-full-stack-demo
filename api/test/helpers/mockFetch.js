const mockFetchReturnValue = ({contentType, data}) => {
  global.fetch = jest.fn(() => {
    const response = {}
    if (contentType === 'application/json') {
      response.headers = { get: () => 'application/json' }
      response.json = () => Promise.resolve(data)
    } else if (contentType === 'application/text') {
      response.headers = { get: () => 'application/text' }
      response.text = () => Promise.resolve(data)
    }
    return Promise.resolve(response)
  });
}

module.exports = mockFetchReturnValue
