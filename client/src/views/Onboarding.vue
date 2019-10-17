
    <template>
  <v-stepper class="stepa" v-model="e1"
>
    <v-stepper-items>
      <v-stepper-content step="1" class="stepa1">
       <Step1 />
        <v-container class="mt-10" >
             <v-btn
          color="primary"
          @click="e1 = 2"
          
        >
          Continua
        </v-btn>

        <v-btn text>Cancela</v-btn>
        </v-container>
      </v-stepper-content>

<!-- step-2---------------------------------------------------------------------- -->

      <v-stepper-content step="2">
            <v-list-item-group
        v-model="settings"
        multiple
      >
        <v-card class="mt-10"
        >
        <v-toolbar
        dark
        color="blue">
<h2>Elige 3 Cryptos</h2>
        </v-toolbar>
        <v-container>
            <v-checkbox
      v-model="checkbox1"
    ></v-checkbox>
     <v-checkbox
      v-model="checkbox2"
    ></v-checkbox>
      </v-container>

        </v-card >

      </v-list-item-group>


        <v-btn
          color="primary"    

          @click="enviaInfo"
        >
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

  <!-- STEP---3 --------------------------------------------------- -->


      <v-stepper-content step="3">
               <v-card
        >
        <v-toolbar
         dark
        color="blue">
<h2>Deposita MXN </h2>
        </v-toolbar>
            
            <v-container>
                <v-text-field
            outlined
            label="Ingresa la cantidad a depositar aquí"
            value=""
            v-model="wallet.saldoTotal"
            >
            </v-text-field>
     
            <!-- cantidad en azul -->
            </v-container>
        </v-card>

        <v-btn
          color="primary"
          @click="depositar"
        >
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
  
    <script>
    import Step1 from '@/components/Onboarding/Step1.vue'
    import Step2 from '@/components/Onboarding/Step2.vue'
    import Step3 from '@/components/Onboarding/Step3.vue'
import Axios from 'axios'
    
  export default {
     components:{
         Step1,
         Step2,
         Step3,
     },
    data () {
      return {
        e1: 0,
        settings: [],
        checkbox1: false,
        checkbox2:false,
        checkbox3:false,
        check1:{
          moneda:"BTC"
        },
         check2:{
          moneda:"ETH"
        },
         check3:{
          moneda:"XRP"
        },
        wallet:{
          saldoTotal:""
        }
      }
    },
    created(){
        // console.log(this)
    },
    methods:{
       
            depositar(){
                 Axios
                 .put('http://localhost:4000/cuenta/5da781e58bb9263858303277',this.wallet)
        .then(res => {
          console.log(this.wallet)
        })
        .catch(error => console.log(error)) 
            },

      enviaInfo(){
        this.e1 =  3;
        if(this.checkbox1 === true){
          console.log('vamosBien')
          Axios
           .post('http://localhost:4000/add/moneda/5da764987595462ee5790057',this.check1)
 .then((res) => {
      console.log('seleccionó BTC ')
 })
  .catch(error => console.log(error))
        }
        if (this.checkbox2 === true){
          Axios
           .post('http://localhost:4000/add/moneda/5da764987595462ee5790057',this.check2)
 .then((res) => {
      console.log('selecciono ETH'
 )
 })
    }
  }
    }}
</script>

<style lang="scss" scoped>
.stepa{
    height: 100%;
}
.stepa1{
    height: 100%;
}
</style>