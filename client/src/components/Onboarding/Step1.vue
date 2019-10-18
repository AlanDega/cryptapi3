<template>
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
<router-link to="/home">
    <v-btn class="mr-4" @click="submit">submit</v-btn>
    </router-link>
  </form>
  </v-container>
        </v-card >
    </div>
</template>

<script>
    
import Axios from 'axios'
import EventBus from '@/eventBus'

  export default {
   

    data: () => ({
      state:{
        nombre: '',
      email: '',
      contraseña: '',
      },
      id:""
     
    }),

    

    methods: {
      submit () {
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

</style>