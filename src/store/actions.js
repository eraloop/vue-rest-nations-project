import {CountryFetchService} from '../services/makeFetch'


const MakeFetch = (context)=>{
    const countries = CountryFetchService.MakeFetch();
    context.commit("UpdateCountryData", countries)
}

export default{
    MakeFetch
}