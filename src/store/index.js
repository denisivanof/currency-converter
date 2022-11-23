import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        base_code: 'USD',
        conversion_rates: [],
        headers: [
            {
                text: 'Currency',
                align: 'start',
                sortable: false,
                value: 'code',
            },
            { text: 'Amount', value: 'amount' },
        ],
        supported_codes: {},
    },
    getters: {
        ConversionRatesGetters(state){
           return state.conversion_rates.map(item=>{
               return {...item, code: `${item.code}, ${state.supported_codes[item.code]}`}
            })
        }
    },
    mutations: {
        setBaseCode: (state, val)=>state.base_code = val,
        setConversionRatesCommit: (state, val)=>state.conversion_rates.push(val),
        clearStateByKeyArrCommit: (state,key) =>state[key] = [],
        setSupportedCodesCommit: (state, val) => state.supported_codes = val
    },
    actions: {
        async getExchangeRatesAction({commit, state}){
            commit('clearStateByKeyArrCommit', 'conversion_rates')
            const res = await fetch(`https://v6.exchangerate-api.com/v6/8567c1a45f7745d3b124c088/latest/${state.base_code}`)
            let data = await res.json()
            console.log(data)
            for (const [key, value] of Object.entries(data.conversion_rates)) {
                commit('setConversionRatesCommit', {code: key, amount: value})
            }
        },
        async getSupportedCodesAction({commit}){
            const res = await fetch(`https://v6.exchangerate-api.com/v6/8567c1a45f7745d3b124c088/codes`)
            let data = await res.json()
            console.log(data)
            let codes = {}
            data.supported_codes.forEach(item=>{
                codes[item[0]] = item[1]
            })
            commit('setSupportedCodesCommit', codes)
        }
    },
    modules: {},
});
