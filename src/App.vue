<template>
  <div>
    <the-header></the-header>
    <div class="container">
      <div class="row bg-white center p-3 m-sm-auto round">

        <div class="col-sm-6">
          <bill-calculation></bill-calculation>
        </div>

        <div class="col-sm-6 flex text-white">
          <div class="row mt-4">
            <div class="col-6 col-sm-5 col-md-6">
                <p class="mb-0 line-height-0">Tip Amount<small class="text-muted m-0 d-block">/ person</small></p>
            </div>
            <div class="col-6 col-sm-7 col-md-6 text-end amount">
                <p class="d-inline my-5 lead"><img src="./assets/icon-dollar.svg" class="lead"></p>
                <p class="d-inline">{{tipPerPerson}}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-6 col-sm-8 col-md-6">
                <p class="mb-0 line-height-0">Total <small class="text-muted m-0 d-block">/ person</small></p>
            </div>
            <div class="col-6 col-sm-4 col-md-6 text-end amount">
                <p class="d-inline my-5 lead"><img src="./assets/icon-dollar.svg" class="lead"></p>
                <p class="d-inline">{{amountPerPerson}}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-12 mt-5 mb-1 mb-sm-0 mb-md-1 text-center">
                <button class="btn reset" @click="reset">RESET</button>
            </div>
        </div>

          

          <!-- end of bill output -->
        </div>


      </div>
    </div>
    
  </div>
</template>

<script>
import TheHeader from './components/UI/TheHeader.vue'
import BillCalculation from './components/BillCalculation.vue'


import {useStore} from 'vuex'

import {computed} from 'vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    BillCalculation,
  },

  setup() {
        const store = useStore()

        const tipPerPerson = computed(() => {
            return store.getters.tipPerPerson
        })

        const amountPerPerson = computed(() => {
            return store.getters.amountPerPerson
        })

        function reset() {
            store.dispatch('tipPerPerson', {tip: 0, perPerson: 0})
        }

        return {
            tipPerPerson,
            amountPerPerson,
            reset
        }
        
    },
}
</script>

<style>
body {
  background-color: hsl(185, 41%, 84%);
}

.billOutput {
    background-color: hsl(183, 100%, 15%);
    border-radius: 8px;
}
.amount {
    color: hsl(185, 41%, 84%);
}

.reset {
    background-color: hsl(172, 67%, 45%);
    width: 100%;
}

@media (min-width: 576px) {
  .center {
  width: 100%;
}
}

@media (min-width: 768px) {
  .center {
  width: 80%;
  }
}

.round {
  border-radius: 20px;
}

.flex {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: hsl(183, 100%, 15%);
  border-radius: 8px;
}
.flex > .row {
  flex: 1;
}
/* .row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display:         flex;
  flex-wrap: wrap;
} */
/* .row > [class*='col-'] {
  display: flex;
  flex-direction: column;
} */

</style>
