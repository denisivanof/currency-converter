<template>
  <v-row class="d-flex justify-center">
    <v-col cols="9">
      <v-card>
        <v-card-title class="d-flex justify-space-between align-center">Exchange rates
          <div style="width: 200px">
            <v-select
                v-model="base_code"
                :items="conversion_rates"
                item-text="code"
                solo
            ></v-select>
          </div>
        </v-card-title>
        <v-card-text>
          <v-data-table
              :headers="headers"
              :items="getConversionRates"
              :items-per-page="10"
              class="elevation-1"
          ></v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import store from "@/store";

export default {
  name: "ExchangeRates",
  data:()=>({
  }),
  created() {
    if(!this.getConversionRates().length){
      this.getExchangeRatesAction()
    }
  },
  methods:{
    ...mapActions([
      'getExchangeRatesAction'
    ]),
    ...mapMutations([
       'setBaseCode'
    ])
  },
  computed:{
    base_code: {
      get(){
        return store.state.base_code
      },
      set(val){
        this.setBaseCode(val)
      }
    },
    ...mapState({
      headers: state => state.headers,
      conversion_rates: state => state.conversion_rates
    }),
    ...mapGetters({
      getConversionRates: "ConversionRatesGetters"
    })
  },
  watch:{
    base_code(){
      this.getExchangeRatesAction()
    }
  }
}
</script>

<style scoped>

</style>
