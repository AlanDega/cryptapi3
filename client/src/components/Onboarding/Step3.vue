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
                    saldoTotal:"0",
            }
            }
        },
        created() {
        }
        ,
        methods: {
            
            depositar(){
                console.log(this.state);
                 axios.put('http://localhost:4000/cuenta/5da781e58bb9263858303277',this.state)
        .then(res => alert('Cuenta añadida'))
        .catch(error => console.log(error)) 
            }
                
            
        }
        
    }
</script>

<style lang="scss" scoped>

</style>