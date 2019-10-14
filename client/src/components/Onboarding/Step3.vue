<template>
    <div>
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
            value="$"
            v-model="state.balance"
            >
            </v-text-field>
            <router-link
    to="/home">

            <v-btn @click="depositar">Aceptar</v-btn>
            </router-link>

            <h2>Balance actual: {{state.balance}} MXN</h2>
            <!-- cantidad en azul -->
            </v-container>
        </v-card>
      
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                state: {
                    balance:"0"
            }
            }
        },
        created() {
        }
        ,
        methods: {
            obtenerEstado(){
                axios
                .get()//url, callback)
            },
            depositar(){
                console.log(this.state);
                 axios.post('http://localhost:4000/create/cuenta',this.state)
        .then(res => alert('Cuenta añadida'))
        .catch(error => console.log(error))
            }
                
            
        }
        
    }
</script>

<style lang="scss" scoped>

</style>