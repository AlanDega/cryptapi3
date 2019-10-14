
<template>
  
    <v-tabs >
      <v-tab>
        BTC
      </v-tab>
      <v-tab>
        ETH
      </v-tab>
      <v-tab>
        XRP
      </v-tab>
      
          <v-tab-item>
            <v-container>
          <v-row>
              <v-col  cols="6">
                
  <v-card >
    <v-toolbar    dark color="yellow darken-1">
                  <h1>Compra</h1>

    </v-toolbar>
             <PrecioMenor/>

        </v-card>
              </v-col>
              <v-col  cols="6">
<v-card >
  <v-toolbar dark color="yellow darken-1  ">
    <h1>Venta</h1>
  </v-toolbar>
            
                        <PrecioMayor/>

        </v-card>
              </v-col>
          </v-row>
          <v-card>
            <!-- <Ganancia /> -->
          </v-card>
      </v-container>
      </v-tab-item>
    
       <v-tab-item>
          <v-row>
              <v-col  cols="6">
  <v-card >
          <v-card-text>
            <h1>Bitso</h1>
             <PrecioBTC1/>

          </v-card-text>
        </v-card>
              </v-col>
              <v-col  cols="6">
<v-card >
          <v-card-text>
            <h1>CryptoCompare</h1>
                        <PrecioBTC2/>

          </v-card-text>
        </v-card>
              </v-col>
             
          </v-row>
    <v-container>
      <v-card> 
        <!-- <v-card-title>Si compras en {{}} y vendes en {{}} puedes ganar :</v-card-title> -->
        <v-card-text>
          <!-- {{coins - coins2}} -->
          <!-- <Calculadora /> -->
        </v-card-text>
        <v-card-text>
        </v-card-text>
        </v-card>
    </v-container>
      </v-tab-item>
       <v-tab-item>
          <v-row>
              <v-col  cols="6">
  <v-card >
          <v-card-text>
            <h1>Bitso</h1>
             <PrecioBTC1/>

          </v-card-text>
        </v-card>
              </v-col>
              <v-col  cols="6">
<v-card >
          <v-card-text>
            <h1>CryptoCompare</h1>
            <PrecioBTC2/>

          </v-card-text>
        </v-card>
              </v-col>
          </v-row>
      
      </v-tab-item>
     
    </v-tabs>
</template>

    <script>
    import { mapState } from 'vuex'


import PrecioMayor from '@/components/PreciosBTC/PrecioMayor.vue'
import PrecioMenor from '@/components/PreciosBTC/PrecioMenor.vue'
import Ganancia from '@/components/PreciosBTC/Ganancia.vue'
import Movimientos from '@/components/PreciosBTC/Movimientos.vue'


  export default {
    components:{
        PrecioMenor,
        PrecioMayor,
        Ganancia,
        Movimientos,

    },
    data () {
      return {
      }
    },
     mounted () {
    this.$store.dispatch('loadBitso')
  },
     created(){
    this.$store.dispatch('loadCoin')

     },
  computed: mapState([
    'coins',
    'coins2'
  ])
  }

  
</script>

<style >

</style>