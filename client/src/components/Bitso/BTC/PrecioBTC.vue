  <template>
      <div>
  <h1>{{coins}}</h1>
      </div>
  </template>
  
  <script>
          import { mapState} from 'vuex'

    import axios from "axios";
    const options = {
  headers: {'X-Custom-Header': 'value'}
};

    export default {
        name: 'app',
        data() {
            return {
                monedasMXN: "",
                
            }
        },  
        created(){
                this.$store.dispatch('loadCoins')

 
    //         axios({ method: "GET", "url": "https://api.bitso.com/v3/order_book/?book=btc_mxn" })
    //         .then(result => {
    //     this.monedasMXN = result.data.payload.bids[0].price;
    //     console.log(this.monedasMXN)
    // }, error => {
    //     console.error(error);
    // });

        },
         computed: mapState ([
          'coins'
    ]),
      
        methods: {
             
    }
}
      
  </script>
  
  <style lang="scss" scoped>
  
  </style>
  
  
  
  
  
  
 