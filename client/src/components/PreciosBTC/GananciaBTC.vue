<template>
    <div>
    <!-- // en notificacion -->
    <v-container v-if="coins > coins2">
        <!-- segundo text en coin -->
         <h2>Potencial de ganancia = {{coins - coins2}}  </h2>
           

    </v-container>
    <v-container v-if="coins2 > coins">
          <h2>Potencial de ganancia = {{coins2 - coins}}  </h2>
         

    </v-container>
    
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
   

     
  computed: mapState([
    'coins',
    'coins2'
  ])
    }
</script>

<style lang="scss" scoped>

</style>