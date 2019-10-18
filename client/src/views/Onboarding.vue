
    <template>
  <v-stepper class="stepa" v-model="e1"
>
    <v-stepper-items>
      <v-stepper-content step="1" class="stepa1">
       <div>
 <v-card class="mt-10"
        >
        <v-toolbar
        dark
        color="blue">
<h2>Registrate</h2>
        </v-toolbar>
        <v-container>
  <form>
    <v-text-field
      v-model="state.nombre"
      label="Nombre"
      required
     
    ></v-text-field> 
    <v-text-field
      v-model="state.email"
      label="E-mail"
      required
     
    ></v-text-field>
    <!-- <v-text-field
      v-model="contraseña"
      label="Contraseña"
      required
    
    ></v-text-field>
    -->

  </form>
  </v-container>
        </v-card >
    </div>
        <v-container class="mt-10" >
             <v-btn
          color="primary"
          @click="registra"
          
        >
          Continua
        </v-btn>

        <v-btn text>Cancela</v-btn>
        </v-container>
      </v-stepper-content>

     
  <!-- STEP---2--------------------------------------------------- -->


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
            v-model="wallet.MXN"
            >
            </v-text-field>
     
            <!-- cantidad en azul -->
            </v-container>
        </v-card>
        <router-link to="/home">
           <v-btn
           class="depositaBoton"
          color="primary"
          @click="depositar"
        >
          Continue
        </v-btn>
        </router-link>
       

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
         state:{
        nombre: '',
      email: '',
      contraseña: '',
      },
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
          MXN:""
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
  },


  registra(){
    this.e1 = 3;
    Axios
     .post('http://localhost:4000/create/cuenta',this.state)
        .then((response) =>{
           console.log(response.data._id)
             
           })
        
        
        .catch(error => console.log(error)) 
      },
  }
    }
</script>

<style lang="scss" scoped>
.stepa{
    height: 100%;
}
.stepa1{
    height: 100%;
}
.depositaBoton{
  margin-top: 50px;
}
</style>