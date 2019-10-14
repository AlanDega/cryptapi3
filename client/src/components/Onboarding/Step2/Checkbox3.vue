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
                    <v-col>
                           <v-img
                        src="@/assets/ripple.png"
                        height="30"
                        width="30"
                        > </v-img> 
                                               
                          
                    </v-col>
                    <v-col>

                    </v-col>

                </v-row>
            </v-list-item-content>
          </template>
        </v-list-item>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>