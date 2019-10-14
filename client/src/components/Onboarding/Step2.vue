<template>
    <div>
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
            <v-list>          
              <!-- <Checkbox1 /> -->
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
              <Checkbox2 />
              <Checkbox3 />        


            </v-list>
      </v-container>

        </v-card >

      </v-list-item-group>

      
    </div>
</template>

<script>
import Checkbox1 from '@/components/Onboarding/Step2/Checkbox1.vue'
import Checkbox2 from '@/components/Onboarding/Step2/Checkbox2.vue'
import Checkbox3 from '@/components/Onboarding/Step2/Checkbox3.vue'

export default {
      components:{
        Checkbox1,
        Checkbox2,
        Checkbox3
      },
       data: () => ({
      settings: [],
    }),
        
    }
</script>

<style lang="scss" scoped>

</style>