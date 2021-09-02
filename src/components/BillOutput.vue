<template>
    <div class="container billOutput text-white direction">
        <div class="row mt-4">
            <div class="col-6 col-sm-5 col-md-6">
                <p class="mb-0 line-height-0">Tip Amount<small class="text-muted m-0 d-block">/ person</small></p>
            </div>
            <div class="col-6 col-sm-7 col-md-6 text-end amount">
                <p class="d-inline my-5 lead"><img src="../../src/assets/icon-dollar.svg" class="lead"></p>
                <p class="d-inline">{{tipPerPerson}}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-6 col-sm-8 col-md-6">
                <p class="mb-0 line-height-0">Total <small class="text-muted m-0 d-block">/ person</small></p>
            </div>
            <div class="col-6 col-sm-4 col-md-6 text-end amount">
                <p class="d-inline my-5 lead"><img src="../../src/assets/icon-dollar.svg" class="lead"></p>
                <p class="d-inline">{{amountPerPerson}}</p>
            </div>
        </div>

        <div class="row align-self-end">
            <div class="col-12 reset mt-2 mb-2 text-center">
                <button class="btn" @click="reset">RESET</button>
            </div>
        </div>

    </div>
</template>

<script>
import {useStore} from 'vuex'

import {computed} from 'vue'

export default {
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

<style scoped>
.billOutput {
    background-color: hsl(183, 100%, 15%);
    border-radius: 8px;
}
.amount {
    color: hsl(185, 41%, 84%);
}

button {
    background-color: hsl(172, 67%, 45%);
    width: 100%;
}

.direction {
    flex: 1;
}
</style>