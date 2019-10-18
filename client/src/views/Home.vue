
<template>
<div>
                <!-- {{global}} -->
<h1>{{data.id}}</h1>
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
              <v-bottom-sheet v-model="sheetBTCventa">
                <template v-slot:activator="{ on }">
                  <v-btn dark v-on="on">Venta</v-btn>
                </template>
                <v-sheet class="text-center" height="200px">
                  <v-container>
                    <!-- <div v-if="coins > coins2">
                      <h2>Potencial de ganancia = {{this.BTCvolume * (coins - coins2) }}</h2>
                    </div>
                    <div v-if="coins2 > coins">
                      <h2>Potencial de ganancia = {{this.BTCvolume * (coins2 - coins) }}</h2>
                    </div> -->
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
                        <input type="number" v-model="BTCVentaVolume" @input="procesaVenta" />
                      </v-container>
                    </v-col>
                    <v-col cols="6">
                      TotalMXN={{totalCompra}}
                      <v-btn color="yellow" @click="ventaBTC">Aceptar</v-btn>
                    </v-col>
                    <v-col cols="6"></v-col>
                  </v-row>
                </v-sheet>
              </v-bottom-sheet>
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
    import EventBus from '@/eventBus'

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
      menorBTC:"",
      mayorBTC:"",
      menorETH:"",
      mayorETH:"",
      menorXRP:"",
      mayorXRP:"",
      data:{
 id:"",
      },
     
      PotencialGanancia:"",
            PotencialGananciaETH:"",
      BTCVentaVolume:"",
            ETHVentaVolume:"",
            totalVentaETH:"",
      coinsETH:"",
      coins2ETH:"",
      movs:[],
       movimientos: {
           tipo:"",
           moneda:"",
           precio:""
        },
      totalCompra: "",
      totalVenta: "",
      totalCompraETH:"",
      BTCvolume: 0,
      ETHvolume:"",
      XRPvolume:"",
      sheet: false,
      sheetETH:false,
      sheetBTCventa:false,
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
    EventBus.$on('DATA_PUBLISHED', (payload) => {
        this.updateData(payload)
    })
    
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
        console.log(this.cuenta.BTCpercentage);
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

    updateData(payload){
      this.data= payload
    },


    procesa() {
      console.log('coins', this.coins);
      console.log('coins2', this.coins2);
      if(this.coins < this.coins2){
        console.log('menorcoins', this.coins);
        this.menorBTC= this.coins
      }
      if(this.coins2 < this.coins){
        console.log('menorcoins2',this.coins2);
         this.menorBTC= this.coins2
      }
      console.log(this.menorBTC);
      if (this.BTCvolume === "1") {
        this.totalCompra = this.menorBTC;
        console.log(this.totalCompra);
      }
      if (this.BTCvolume === "2") {
        this.totalCompra = this.menorBTC * 2;
        //en vez de 2 btcvolume
      }
      if (this.BTCvolume === "3") {
        this.totalCompra = this.menorBTC * 3;
      }
      if (this.BTCvolume === "4") {
        this.totalCompra = this.menorBTC * 4;
      }
      if (this.BTCvolume === "5") {
        this.totalCompra = this.menorBTC * 5;
      }
      //  this.totalCompra = this.BTCvolume * coins
    },
     procesaETH() {
      console.log('coins', this.coinsETH);
      console.log('coins2', this.coins2ETH);
      if(this.coinsETH < this.coins2ETH){
        console.log('menorcoins', this.coinsETH);
        this.menorETH= this.coinsETH
      }
      if(this.coins2ETH < this.coinsETH){
        console.log('menorcoins2',this.coins2ETH);
         this.menorETH= this.coins2ETH
      }
      console.log(this.menorETH);

      if (this.ETHvolume === "1") {
        this.totalCompraETH = this.menorETH;
        console.log(this.totalCompra);
      }
      if (this.ETHvolume === "2") {
        this.totalCompraETH = this.menorETH * 2;
        //en vez de 2 btcvolume
        //compraETH en vez de coins ETH
      }
      if (this.ETHvolume === "3") {
        this.totalCompraETH = this.menorETH * 3;
      }
      if (this.ETHvolume === "4") {
        this.totalCompraETH = this.menorETH * 4;
      }
      if (this.ETHvolume === "5") {
        this.totalCompraETH = this.menorETH * 5;
      }
      //  this.totalCompra = this.BTCvolume * coins
    },

    compraBTC() {
      
//  this.PotencialGanancia = this.BTCvolume * (coins - coins2)
      const suma1 = Number(this.BTCvolume)
      this.cuenta.BTC = suma1 + Number(this.cuenta.BTC);
      // console.log(typeof this.cuenta.BTC, "wallet");
      // console.log(typeof this.BTCvolume, "volumes");
      // console.log(this.cuenta.BTC );
      // this.movimientos.tipo = this.coins;
      // console.log(this.totalCompra,'totalcompra');
      // console.log(this.cuenta.saldoTotal,'saldoTotla');
      this.cuenta.MXN = this.cuenta.MXN - this.totalCompra;
      this.cuenta.MxnBtc = this.BTCvolume * this.menorBTC;
      console.log( typeof this.cuenta.MxnBtc, 'typemxnbtc' );
      var totalPorcentaje = Number(this.cuenta.MxnBtc) + Number(this.cuenta.MxnEth) + Number(this.cuenta.MxnXrp) + Number(this.cuenta.MXN)
      // this.cuenta.saldoTotal = totalPorcentaje;
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
            this.cuenta.ETHpercentage=porcentages[2];

      this.cuenta.BTCpercentage = porcentages[1];
      this.cuenta.MXNpercentage = porcentages[0];

      this .movimientos.precio = this.menorBTC
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
      
      this.cuenta.MxnEth = this.ETHvolume * this.menorETH;
      console.log( typeof this.cuenta.MxnEth, 'typemxneth' );
      var totalPorcentaje2 = Number(this.cuenta.MxnBtc) + Number(this.cuenta.MxnEth) + Number(this.cuenta.MxnXrp) + Number(this.cuenta.MXN)
      // this.saldoTotal = totalPorcentaje2;
      //  console.log(this.MXN);
      //  console.log(this.coins);
      console.log('newsaldo', this.cuenta.saldoTotal );
      var arr = [this.cuenta.MXN, this.cuenta.MxnBtc, this.cuenta.MxnEth, this.cuenta.MxnXrp];
      console.log('arr %',arr[0], arr[1],arr[2],arr[3]);
      var porcentages = arr.map(function(element) {
        return (element = (element / totalPorcentaje2) * 100);
        // deposito inicial variable 2000000
      });
      console.log(porcentages);
      this.cuenta.ETHpercentage = porcentages[2];
      this.cuenta.BTCpercentage = porcentages[1];
      this.cuenta.MXNpercentage = porcentages[0];

      this .movimientos.precio = this.menorETH
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

procesaVenta(){

      console.log("funcionaa");
      if (this.BTCVentaVolume === "1") {
        this.totalVenta = this.menorBTC;
        console.log(this.totalVenta,'totalventa');
      }
      if (this.BTCVentaVolume === "2") {
        this.totalVenta = this.menorBTC * 2;
        //en vez de 2 btcvolume
      }
      if (this.BTCVentaVolume === "3") {
        this.totalVenta = this.menorBTC * 3;
      }
      if (this.BTCVentaVolume === "4") {
        this.totalVenta = this.menorBTC * 4;
      }
      if (this.BTCVentaVolume === "5") {
        this.totalVenta = this.menorBTC * 5;
      }
    },
     ventaBTC(){
       if(this.coins > this.coins2){
          this.PotencialGanancia = this.BTCvolume * (this.coins - this.coins2)
       }
       else if (this.coins2 > this.coins) {
                   this.PotencialGanancia = this.BTCvolume * (this.coins2 - this.coins)

       }
      const resta1 = Number(this.BTCvolume)
      this.cuenta.BTC = resta1 - Number(this.cuenta.BTC);
      // console.log(typeof this.cuenta.BTC, "wallet");
      // console.log(typeof this.BTCvolume, "volumes");
      // console.log(this.cuenta.BTC );
      // this.movimientos.tipo = this.coins;
      // console.log(this.totalCompra,'totalcompra');
      // console.log(this.cuenta.saldoTotal,'saldoTotla');
      this.cuenta.MXN = Number(this.cuenta.MXN) + Number(this.totalVenta) + Number(this.PotencialGanancia);
      // this.cuenta.MxnBtc -= this.BTCvolume * this.coins;
      this.cuenta.MxnBtc = this.cuenta.MxnBtc - this.BTCvolume * this.menorBTC;
      console.log( typeof this.cuenta.MxnBtc, 'typemxnbtc' );
      var totalPorcentaje = Number(this.cuenta.MxnBtc) + Number(this.cuenta.MxnEth) + Number(this.cuenta.MxnXrp) + Number(this.cuenta.MXN)
      // this.cuenta.saldoTotal = totalPorcentaje;
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
       this.cuenta.ETHpercentage=porcentages[2];

      this.cuenta.BTCpercentage = porcentages[1];
      this.cuenta.MXNpercentage = porcentages[0];

      this .movimientos.precio = this.menorBTC
      this .movimientos.moneda = "BTC"
      this .movimientos.tipo = "venta"


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
        // aqui es necesario los demas porcentages?
      })

 })
     },
  procesaVentaETH(){

      console.log("funcionaa");
      if (this.ETHVentaVolume === "1") {
        this.totalVentaETH = this.menorETH;
        console.log(this.totalVenta,'totalventa');
      }
      if (this.ETHVentaVolume === "2") {
        this.totalVentaETH = this.menorETH * 2;
        //en vez de 2 btcvolume
      }
      if (this.BTCVentaVolume === "3") {
        this.totalVentaETH = this.menorETH * 3;
      }
      if (this.BTCVentaVolume === "4") {
        this.totalVentaETH = this.menorETH * 4;
      }
      if (this.BTCVentaVolume === "5") {
        this.totalVentaETH = this.menorETH * 5;
      }
    },
  ventaETH(){
 if(this.coinsETH > this.coins2ETH){
          this.PotencialGanancia = this.ETHvolume * (this.coinsETH - this.coins2ETH)
       }
       else if (this.coins2 > this.coins) {
                   this.PotencialGanancia = this.BTCvolume * (this.coins2ETH - this.coinsETH)

       }
      const resta2= Number(this.ETHvolume)
      this.cuenta.ETH = resta2 - Number(this.cuenta.ETH);
      // console.log(typeof this.cuenta.BTC, "wallet");
      // console.log(typeof this.BTCvolume, "volumes");
      // console.log(this.cuenta.BTC );
      // this.movimientos.tipo = this.coins;
      // console.log(this.totalCompra,'totalcompra');
      // console.log(this.cuenta.saldoTotal,'saldoTotla');
      this.cuenta.MXN = Number(this.cuenta.MXN) + Number(this.totalVentaETH) + Number(this.PotencialGanancia);
      // this.cuenta.MxnBtc -= this.BTCvolume * this.coins;
      this.cuenta.MxnBtc = this.cuenta.MxnBtc - this.ETHvolume * this.menorETH;
      console.log( typeof this.cuenta.MxnBtc, 'typemxnbtc' );
      var totalPorcentaje = Number(this.cuenta.MxnBtc) + Number(this.cuenta.MxnEth) + Number(this.cuenta.MxnXrp) + Number(this.cuenta.MXN)
      // this.cuenta.saldoTotal = totalPorcentaje;
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
       this.cuenta.ETHpercentage=porcentages[2];

      this.cuenta.BTCpercentage = porcentages[1];
      this.cuenta.MXNpercentage = porcentages[0];

      this .movimientos.precio = this.menorETH
      this .movimientos.moneda = "ETH"
      this .movimientos.tipo = "venta"


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
        // % necesarios?
      })

 })
     },

  


}

}
;
</script>

<style >
.saldoNum {
  color: black;
}
</style>