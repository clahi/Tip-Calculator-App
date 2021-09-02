<template>
  <form>
    <div class="row">
      <div class="col">
        <label for="bill" class="form-label">Bill</label>
        <input
          type="number"
          class="form-control text-end"
          id="bill"
          aria-describedby="bill"
          :placeholder="bill"
          v-model="amount"
        />
      </div>
    </div>
  </form>
  <bill-tip :amount="amount" :numberOfPeople = 'numberOfPeople' @errorOccured="errorOccured"></bill-tip>
  <div class="row align-items-end">
    <div class="col ">
      <div class="m-auto">
      <div class="row">
          <label for="bill" class="form-label col-6">Number of people</label>
          
            <p class="text-danger text-end col-6 align-self-end">{{error}}</p> 
      </div>
      <strong><input
        type="number"
        class="form-control text-end mb-2 mb-sm-0"
        id="numberOfPeople"
        aria-describedby="bill"
        v-model="numberOfPeople"
      /></strong>
  </div>
    </div>
  </div>
</template>

<script>
import BillTip from "./BillTip.vue";

import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    BillTip
  },
  setup() {
    const store = useStore();

    const numberOfPeople = ref(0)

    const amount = ref(0)

    const error = ref('')

    // bill in this format can't update automatically
    // const bill = ref(store.getters.bill)

    //computed value updates automatically
    const bill = computed(() => {
      return store.getters.bill;
    });

    function errorOccured(val) {
      error.value = val
    }

    return {
      bill,
      amount,
      numberOfPeople,
      error,
      errorOccured
    };
  },
};
</script>

<style scoped>
input {
  color: hsl(186, 14%, 43%);
  background-color: hsl(189, 41%, 97%);
}

#bill {
  background: hsl(189, 41%, 97%) url("C:\\Users\\User\\Desktop\\FrontEndMentor\\solution\\solution\\src\\assets\\icon-dollar.svg") left no-repeat;
  padding-left: 17px;
}
#numberOfPeople {
  background: hsl(189, 41%, 97%) url("C:\\Users\\User\\Desktop\\FrontEndMentor\\solution\\solution\\src\\assets\\icon-person.svg") left no-repeat;
  padding-left: 17px;
}
</style>