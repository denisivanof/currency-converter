<template>
  <v-card>
    <v-card-title>Currency converter</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="4">
          <v-text-field
              v-model="Amount"
              label="Amount"
              outlined
              dense
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CurrencyConverter",
  data: () => ({
    sum: 1.0
  }),
  methods: {
    onChange(val){
      this.sum = val
    }
  },
  computed:{
    Amount: {
      get(){
        return Number(this.sum).toLocaleString('en')
      },
      set(value){
        this.sum = value.replace(/[^0-9-,-.]/g, "").replace(/\s/g, "")
      }
    }
  }
}
</script>

<style scoped>

</style>
