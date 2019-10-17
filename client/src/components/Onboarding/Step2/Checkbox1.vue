<template>
    <div>
         <v-list-item>
          <template v-slot:default="{ active, toggle }">
            <v-list-item-action>
              <v-checkbox
                v-model="active"
                color="primary"
                @click="toggle"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
                <v-row>
                    <v-col cols="8">
                          <v-img
                        src="@/assets/btc.png"
                        height="30"
                        width="30"
                        > </v-img>
                    </v-col>
                </v-row>
            </v-list-item-content>
          </template>
        </v-list-item>
    </div>
</template>

<script>
import Axios from 'axios'
    export default {
        data() {
          return {
            state:{
              moneda: "BTC"
            }
          }
        },
        methods:{
          seleccionaMoneda1(){
            Axios
  .post('http://localhost:4000/create/moneda/5da764987595462ee5790057',this.state)
 .then((res) => {
      console.log('envio chido ')
 })
  .catch(error => console.log(error))
     
          },
         
          
       }
    }
</script>

<style lang="scss" scoped>

</style>