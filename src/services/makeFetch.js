import ApiService from './api'

const CountryFetchService = {
  MakeFetch : async function () {
    const requestData = {
      method: 'GET',
      url: 'https://restcountries.com/v2/all'
    }

    try {
      // ApiService.setHeader()
      const response = await ApiService.customRequest(requestData)
      console.log(response.data)
      return response.data
    } catch (error) {
      return error
    }
  },


}

export { CountryFetchService }
