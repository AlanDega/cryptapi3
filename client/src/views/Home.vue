
<template>
<div>
  <v-tabs centered>
    <v-tab>BTC</v-tab>
    <v-tab>ETH</v-tab>
    <v-tab>XRP</v-tab>

    <v-tab-item>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-card>
              <v-toolbar dark color="yellow darken-2">
                <h1>Menor</h1>
              </v-toolbar>
              <v-img src="@/assets/btc.png" width="60" height="60"></v-img>
              <PrecioMenorBTC />
              <v-bottom-sheet v-model="sheet">
                <template v-slot:activator="{ on }">
                  <v-btn dark v-on="on">Compra</v-btn>
                </template>
                <v-sheet class="text-center" height="200px">
                  <v-container>
                    <div v-if="coins > coins2">
                      <h2>Potencial de ganancia = {{this.BTCvolume * (coins - coins2) }}</h2>
                    </div>
                    <div v-if="coins2 > coins">
                      <h2>Potencial de ganancia = {{this.BTCvolume * (coins2 - coins) }}</h2>
                    </div>
                  </v-container>

                  <v-row>
                    <v-col cols="4">
                      <v-container>
                        <!-- <v-text-field
            @input="procesa"
          outlined
          label="cantidad BTC"
          v-model="BTCvolume">
          

      
                        </v-text-field>-->
                        <input type="number" v-model="BTCvolume" @input="procesa" />
                      </v-container>
                    </v-col>
                    <v-col cols="6">
                      TotalMXN={{totalCompra}}
                      <v-btn color="yellow" @click="compraBTC">Aceptar</v-btn>
                    </v-col>
                    <v-col cols="6"></v-col>
                  </v-row>
                </v-sheet>
              </v-bottom-sheet>
            </v-card>
          </v-col>



          <v-col cols="6">
            <v-card>
              <v-toolbar dark color="yellow darken-2  ">
                <h1>Mayor</h1>
              </v-toolbar>
              <v-img src="@/assets/btc.png" width="60" height="60"></v-img>

              <PrecioMayorBTC />
              <v-btn dark>venta</v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
        </v-tab-item>

<!-- -----------------------------------ETH------------------------------------------------- -->
        <v-tab-item>
         <v-container>
        <v-row>
          <v-col cols="6">
            <v-card>
              <v-toolbar dark color="deep-purple">
                <h1>Compra</h1>
              </v-toolbar>
              <v-img src="@/assets/ethLogo.png" width="60" height="60"></v-img>
              
              <v-container>
   
    <div v-if=" coinsETH < coins2ETH " >
        <h2>Bitso</h2>
<p>{{coinsETH}}</p>
    </div>
     <div v-if="coins2ETH <coinsETH ">
        <h2>CoinCompare </h2>
<p>{{coins2ETH}}</p>
    </div>
    <div v-if="coins2ETH === coinsETH ">
      <h2>los precios son iguales</h2>
    </div>
</v-container>

              <v-bottom-sheet v-model="sheetETH">
                <template v-slot:activator="{ on}">
                  <v-btn dark v-on="on">Compra</v-btn>
                </template>
                <v-sheet class="text-center" height="200px">
                  <v-container>
                    <div v-if="coinsETH > coins2ETH">
                      <h2>Potencial de ganancia = {{this.ETHvolume * (coinsETH - coins2ETH) }}</h2>
                    </div>
                    <div v-if="coins2ETH > coinsETH">
                      <h2>Potencial de ganancia = {{this.ETHvolume * (coins2ETH - coinsETH) }}</h2>
                    </div>
                  </v-container>

                  <v-row>
                    <v-col cols="4">
                      <v-container>
                        <!-- <v-text-field
            @input="procesa"
          outlined
          label="cantidad BTC"
          v-model="BTCvolume">
          

      
                        </v-text-field>-->
                        <input type="number" v-model="ETHvolume" @input="procesaETH" />
                      </v-container>
                    </v-col>
                    <v-col cols="6">
                      TotalMXN={{totalCompraETH}}
                      <v-btn color="purple" @click="compraETH">Aceptar</v-btn>
                    </v-col>
                    <v-col cols="6"></v-col>
                  </v-row>
                </v-sheet>
              </v-bottom-sheet>
            </v-card>
          </v-col>


          <v-col cols="6">
            <v-card>
              <v-toolbar dark color="deep-purple  ">
                <h1>Venta</h1>
              </v-toolbar>
              <v-img src="@/assets/ethLogo.png" width="60" height="60"></v-img>

              <PrecioMayorETH />
            </v-card>
          </v-col>
        </v-row>
        <v-card>
          <Ganancia />
        </v-card>
      </v-container>

</v-tab-item>
<!-- --------------------------------------------------------------XRP------------------------ -->
 <v-tab-item>
 <v-container>
        <v-row>
          <v-col cols="6">
            <v-card>
              <v-toolbar dark color="deep-purple">
                <h1>Compra</h1>
              </v-toolbar>
              <v-img src="@/assets/btc.png" width="60" height="60"></v-img>
              <PrecioMenor />
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card>
              <v-toolbar dark color="yellow darken-2  ">
                <h1>Venta</h1>
              </v-toolbar>
              <v-img src="@/assets/btc.png" width="60" height="60"></v-img>

              <PrecioMayor />
            </v-card>
          </v-col>
        </v-row>
        <v-card>
          <!-- <Ganancia /> -->
        </v-card>
      </v-container>
      </v-tab-item>
        </v-tabs>
        <!-- -----------------PERCENTAGES----------------------- -->
<v-container >
<v-card>
            <v-row>
              <v-col cols="6">
                <v-progress-circular
                  :value="cuenta.BTCpercentage"
                  color="yellow darken-2"
                  size="300"
                  width="22"
                >
                      <!-- {{saldos.MxnBtc}} -->
                      <h2>{{cuenta.BTCpercentage}}%</h2>
                </v-progress-circular>
              </v-col>
              <v-col cols="6">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>MXN {{cuenta.MXN}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>BTC {{cuenta.BTC}}</v-list-item-title>
                                        <v-list-item-title>ETH{{cuenta.ETH}}</v-list-item-title>
                                        <v-list-item-title>Total{{cuenta.saldoTotal}}</v-list-item-title>

                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col cols="6">
                <v-progress-circular
                  :value="cuenta.ETHpercentage"
                  color="deep-purple"
                  size="300"
                  width="22"
                >
                      <!-- {{saldos.MxnBtc}} -->
                      <h2>{{cuenta.ETHpercentage}}%</h2>
                </v-progress-circular>
              </v-col>
              <v-col cols="6">
                <v-progress-circular
                  :value="cuenta.MXNpercentage"
                  color="green darken-1"
                  size="300"
                  width="22"
                >
                      <!-- {{saldos.MxnBtc}} -->
                      <h2>{{cuenta.MXNpercentage}}%</h2>
                </v-progress-circular>
              </v-col>
              
            </v-row>
        </v-card>

</v-container>
        

<!-- ---------------MOVIMIENTOS---------------------------------------------------- -->

        <v-card
  >
    <v-toolbar
      color="yellow darken-2"
      dark
    >
      <v-toolbar-title>Movimientos</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
    <ul>
      <li v-for="move in movs" :key="move.id">
              {{move.moneda}}

      </li>
    </ul>
  </v-card>


    <!-- // eth----------------------------------------------------------------------------- -->
     
    <!-- 3 coin--------------------------------------------------------------------------- -->
     
      </div>
</template>

    <script>
import { mapState } from "vuex";

import PrecioMayorBTC from "@/components/PreciosBTC/PrecioMayorBTC.vue";
import PrecioMenorBTC from "@/components/PreciosBTC/PrecioMenorBTC.vue";
import PrecioMayorETH from "@/components/PreciosETH/PrecioMayorETH.vue";
import PrecioMenorETH from "@/components/PreciosETH/PrecioMenorETH.vue";

import Ganancia from "@/components/PreciosBTC/GananciaBTC.vue";
import Movimientos from "@/components/Cartera/MovimientosBTC.vue";
import Axios from "axios";

export default {
  components: {
    PrecioMenorBTC,
    PrecioMayorBTC,
    PrecioMayorETH,
    PrecioMenorETH,
    Movimientos,

    Ganancia
  },
  data() {
    return {
      coinsETH:"",
      coins2ETH:"",
      movs:[],
       movimientos: {
           tipo:"",
           moneda:"",
           precio:""
        },
      totalCompra: "",
      totalCompraETH:"",
      BTCvolume: 0,
      ETHvolume:"",
      XRPvolume:"",
      sheet: false,
      sheetETH:false,
      cuenta: {
        MxnBtc: null,
        MxnEth: "0",
        MxnXrp: "0",
        BTCpercentage: "",
        ETHpercentage: "",
        XRPpercentage: "",
        MXNpercentage:"",
        BTC: null,
        ETH: "",
        XRP: "",
        MXN:"",
        saldoTotal: "",
       
      },
      
    };
  },
  mounted() {
    this.$store.dispatch("loadBitso");
    
  },
  created() {
    this.$store.dispatch("loadCoin");
    Axios.get("http://localhost:4000/cuenta/5da781e58bb9263858303277")
      .then(response => {
        console.log("esta es responde de db", response.data);
        this.cuenta.MXN = response.data.MXN;
        this.cuenta.BTC = response.data.BTC;
        this.cuenta.ETH = response.data.ETH; 
        this.cuenta.BTCpercentage = response.data.BTCpercentage;
        this.cuenta.MXNpercentage = response.data.MXNpercentage;
        this.cuenta.ETHpercentage = response.data.ETHpercentage;
        this.cuenta.saldoTotal = response.data.saldoTotal;
      })
      .catch();
       Axios
    .get('http://localhost:4000/cuenta/5da781e58bb9263858303277')
    .then((response) => {
            this.movs=response.data.movimientos

      // this.movs[0].title =response.data[2].movimientos.mov1;
      // this.movs[0].action=response.data[2].createdAt
    })

 Axios
      .get("https://api.bitso.com/v3/order_book/?book=eth_mxn")
      .then(response => 
      this.coinsETH =  response.data.payload.bids[0].price
      )  
      
       Axios
      .get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BTC,EOS&tsyms=MXN&api_key=07ef122416564c2ba3d7eb0ea39ede317487f06eae2252802a8d5377b6b29a68')
      .then(result => 
        this.coins2ETH=  result.data.ETH.MXN
            )
      
      
      
      },


  computed: mapState(["coins", "coins2"]),


  methods: {
    procesa() {
      console.log("funcionaa");
      if (this.BTCvolume === "1") {
        this.totalCompra = this.coins;
        console.log(this.totalCompra);
      }
      if (this.BTCvolume === "2") {
        this.totalCompra = this.coins * 2;
        //en vez de 2 btcvolume
      }
      if (this.BTCvolume === "3") {
        this.totalCompra = this.coins * 3;
      }
      if (this.BTCvolume === "4") {
        this.totalCompra = this.coins * 4;
      }
      if (this.BTCvolume === "5") {
        this.totalCompra = this.coins * 5;
      }
      //  this.totalCompra = this.BTCvolume * coins
    },
     procesaETH() {
      console.log("funcionaa");
      if (this.ETHvolume === "1") {
        this.totalCompraETH = this.coinsETH;
        console.log(this.totalCompra);
      }
      if (this.ETHvolume === "2") {
        this.totalCompraETH = this.coinsETH * 2;
        //en vez de 2 btcvolume
        //compraETH en vez de coins ETH
      }
      if (this.ETHvolume === "3") {
        this.totalCompraETH = this.coinsETH * 3;
      }
      if (this.ETHvolume === "4") {
        this.totalCompraETH = this.coinsETH * 4;
      }
      if (this.ETHvolume === "5") {
        this.totalCompraETH = this.coinsETH * 5;
      }
      //  this.totalCompra = this.BTCvolume * coins
    },

    compraBTC() {
      const suma1 = Number(this.BTCvolume)
      this.cuenta.BTC = suma1 + Number(this.cuenta.BTC);
      // console.log(typeof this.cuenta.BTC, "wallet");
      // console.log(typeof this.BTCvolume, "volumes");
      // console.log(this.cuenta.BTC );
      // this.movimientos.tipo = this.coins;
      // console.log(this.totalCompra,'totalcompra');
      // console.log(this.cuenta.saldoTotal,'saldoTotla');
      this.cuenta.MXN = this.cuenta.MXN - this.totalCompra;
      this.cuenta.MxnBtc = this.BTCvolume * this.coins;
      console.log( typeof this.cuenta.MxnBtc, 'typemxnbtc' );
      var totalPorcentaje = Number(this.cuenta.MxnBtc) + Number(this.cuenta.MxnEth) + Number(this.cuenta.MxnXrp) + Number(this.cuenta.MXN)
      this.cuenta.saldoTotal = totalPorcentaje;
      //  console.log(this.MXN);
      //  console.log(this.coins);
      console.log('newsaldo', this.cuenta.saldoTotal );
      var arr = [this.cuenta.MXN, this.cuenta.MxnBtc, this.cuenta.MxnEth, this.cuenta.MxnXrp];
      console.log('arr %',arr[0], arr[1],arr[2],arr[3]);
      var porcentages = arr.map(function(element) {
        return (element = (element / totalPorcentaje) * 100);
        // deposito inicial variable 2000000
      });
      console.log(porcentages);
      this.cuenta.BTCpercentage = porcentages[1];
      this.cuenta.MXNpercentage = porcentages[0];

      this .movimientos.precio = this.coins
      this .movimientos.moneda = "BTC"
      this .movimientos.tipo = "compra"


      Axios
      .patch(
        "http://localhost:4000/cuenta/5da781e58bb9263858303277",
        this.cuenta
      )
        .then(res => {
          console.log("enviando cartera", this.cuenta);
        })
        .catch(error => console.log(error));
            Axios
           .post('http://localhost:4000/add/movimiento/5da781e58bb9263858303277',this.movimientos)
 .then((res) => {
      // console.log('cuentaMov',this.movimientos)
      Axios.get("http://localhost:4000/cuenta/5da781e58bb9263858303277")
      .then(response => {
        // console.log("esta es responde de db", response.data);
        this.cuenta.MXN = response.data.MXN;
        this.cuenta.BTC = response.data.BTC;
        this.cuenta.BTCpercentage = response.data.BTCpercentage
      })

 })

 
    },
compraETH() {
      const suma2 = Number(this.ETHvolume)
      this.cuenta.ETH = suma2 + Number(this.cuenta.ETH);
      // console.log(typeof this.cuenta.BTC, "wallet");
      // console.log(typeof this.BTCvolume, "volumes");
      // console.log(this.cuenta.BTC );
      // this.movimientos.tipo = this.coins;
      // console.log(this.totalCompra,'totalcompra');
      // console.log(this.cuenta.saldoTotal,'saldoTotla');
      this.cuenta.MXN = this.cuenta.MXN - this.totalCompraETH;
      this.cuenta.MxnEth = this.ETHvolume * this.coinsETH;
      console.log( typeof this.cuenta.MxnEth, 'typemxnbtc' );
      var totalPorcentaje = Number(this.cuenta.MxnBtc) + Number(this.cuenta.MxnEth) + Number(this.cuenta.MxnXrp) + Number(this.cuenta.MXN)
      this.cuenta.saldoTotal = totalPorcentaje;
      //  console.log(this.MXN);
      //  console.log(this.coins);
      console.log('newsaldo', this.cuenta.saldoTotal );
      var arr = [this.cuenta.MXN, this.cuenta.MxnBtc, this.cuenta.MxnEth, this.cuenta.MxnXrp];
      console.log('arr %',arr[0], arr[1],arr[2],arr[3]);
      var porcentages = arr.map(function(element) {
        return (element = (element / totalPorcentaje) * 100);
        // deposito inicial variable 2000000
      });
      console.log(porcentages);
      this.cuenta.ETHpercentage = porcentages[2];

      this .movimientos.precio = this.coinsETH
      this .movimientos.moneda = "ETH"
      this .movimientos.tipo = "compra"


      Axios
      .patch(
        "http://localhost:4000/cuenta/5da781e58bb9263858303277",
        this.cuenta
      )
        .then(res => {
          // console.log("enviando cartera", this.cuenta);
        })
        .catch(error => console.log(error));
            Axios
           .post('http://localhost:4000/add/movimiento/5da781e58bb9263858303277',this.movimientos)
 .then((res) => {
      // console.log('cuentaMov',this.movimientos)
      Axios.get("http://localhost:4000/cuenta/5da781e58bb9263858303277")
      .then(response => {
        // console.log("esta es responde de db", response.data);
        this.cuenta.MXN = response.data.MXN;
        this.cuenta.ETH = response.data.ETH;
        this.cuenta.ETHpercentage = response.data.ETHpercentage
      })

 })

 
    },


  }
};
</script>

<style >
.saldoNum {
  color: black;
}
</style>