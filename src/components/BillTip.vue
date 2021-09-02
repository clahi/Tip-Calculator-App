<template>
  <div class="row justify-content-between p-2 text-start">
    <span class="p-0">Select Tip %</span>
    <button
      class="btn text-center col-5 m-1 m-sm-0 my-sm-1 wid text-white"
      v-for="tip in tips.tips"
      :key="tip"
      @click="calculateTip(tip)"
    >
      {{ tip }}%
    </button>
    <button class="btn text-center col-5 m-1 m-sm-0 my-sm-1 wid text-white">Custom</button>
  </div>
</template>

<script>
import { reactive } from "vue";

import { useStore } from "vuex";

export default {
  props: ['amount', 'numberOfPeople'],
  emits: ['errorOccured'],
  setup(props, {emit}) {
    const store = useStore();

    const tips = reactive({
      tips: [5, 10, 15, 25, 40],
    });

    

    function calculateTip(val) {
        if(props.numberOfPeople <= 0) {
          emit('errorOccured', "can't be zero or less")
        } else {
          const perPerson = (props.amount / props.numberOfPeople)
        const tip = (perPerson * (val/100)).toFixed(2)
        console.log(perPerson)
      store.dispatch("tipPerPerson", {tip: tip, perPerson: perPerson});
        }        
    }

    return {
      tips,
      calculateTip,
    };
  },
};
</script>

<style scoped>
@media (min-width: 786px) {
    .wid {
    width: 30%;
}
}

.wid {
    background-color: hsl(183, 100%, 15%);
}

button:focus {
    background-color: hsl(172, 67%, 45%);
    color: hsl(183, 100%, 15%) !important;
}
</style>