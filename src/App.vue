<template>
  <v-app>
    <v-app-bar
        app
        color="deep-purple accent-4"
        dense
        dark
    >
      <nav class="d-flex justify-center" style="width: 100%">
        <router-link
            class="pr-16 text-decoration-none text-h6 white--text d-flex align-center"
            to="/"
        >
          <v-icon>mdi-currency-usd</v-icon>
          Currency Converter
        </router-link>
        <router-link
            class="text-decoration-none text-h6 white--text d-flex align-center"
            to="/exchange-rates"
        >
          <v-icon class="pr-1">mdi-chart-line</v-icon>
          Exchange Rates
        </router-link>
      </nav>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import {mapActions} from "vuex";

export default {
  data: () => ({
  }),
  created() {
    this.getSupportedCodesAction()
  },
  methods:{
    ...mapActions([
        'getSupportedCodesAction'
    ])
  }
}
</script>

<style lang="scss">

</style>
