
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

      <v-stepper-content step="2">
            <Step2 />

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
              <Step3 />

        <v-btn
          color="primary"
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
    
  export default {
     components:{
         Step1,
         Step2,
         Step3,
     },
    data () {
      return {
        e1: 0,
      }
    },
  }
</script>

<style lang="scss" scoped>
.stepa{
    height: 100%;
}
.stepa1{
    height: 100%;
}
</style>