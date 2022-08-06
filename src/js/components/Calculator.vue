<template>
  <div class="md:w-fit bg-white rounded-3xl m-auto mt-10 md:mt-20 flex flex-col md:flex-row">
    <div class="flex flex-col justify-between m-6 md:my-10 md:ml-12 md:mr-6 md:w-full">
      <div class="mb-10">
        <p class="text-very-dark-cyan pb-2">Bill</p>
        <div class="flex items-center bg-very-light-grayish-cyan pl-6 rounded-lg border-2 focus-within:border-strong-cyan" :class="{ 'border-autumn-leaf-orange':!bill_valid }">
          <i class="fa-solid fa-dollar-sign text-grayish-cyan"></i>
          <input v-model="this.bill" type="number" placeholder="0">
        </div>

      </div>
      <div class="mb-4">
        <p class="text-very-dark-cyan pb-2">Select Tip %</p>

          <div class="flex justify-between flex-wrap pt-2">
            <button class="w-12/25 md:w-31% mb-4" :class="{ 'bg-light-cyan':tip_percent === 5 && tip_percent !== this.custom_tip_percent }" @click="set_tip_percent(5)">5%</button>
            <button class="w-12/25 md:w-31% mb-4" :class="{ 'bg-light-cyan':tip_percent === 10 && tip_percent !== this.custom_tip_percent }" @click="set_tip_percent(10)">10%</button>
            <button class="w-12/25 md:w-31% mb-4" :class="{ 'bg-light-cyan':tip_percent === 15 && tip_percent !== this.custom_tip_percent }" @click="set_tip_percent(15)">15%</button>

            <button class="w-12/25 md:w-31% mb-4" :class="{ 'bg-light-cyan':tip_percent === 25 && tip_percent !== this.custom_tip_percent}" @click="set_tip_percent(25)">25%</button>
            <button class="w-12/25 md:w-31% mb-4" :class="{ 'bg-light-cyan':tip_percent === 50 && tip_percent !== this.custom_tip_percent }" @click="set_tip_percent(50)">50%</button>
            <input class="w-12/25 md:w-31% mb-4 border-2 focus-within:border-strong-cyan" :class="{ 'border-light-cyan':tip_percent === this.custom_tip_percent }" type="number" placeholder="custom" v-model="custom_tip_percent" @change="set_tip_percent(this.custom_tip_percent)">
        </div>

      </div>
      <div>
        <p class="text-very-dark-cyan pb-2">Number of People</p>

        <div class="flex items-center bg-very-light-grayish-cyan pl-6 rounded-lg border-2 focus-within:border-strong-cyan" :class="{ 'border-autumn-leaf-orange':!people_valid }">
          <i class="fa-solid fa-user text-grayish-cyan"></i>
          <input v-model="this.people" type="number" placeholder="0">
        </div>

      </div>
    </div>

    <div class="md:w-full m-6 md:my-8 md:ml-6 md:mr-8 bg-tiber rounded-2xl flex flex-col justify-between">
      <div class="my-8 md:my-12 mx-8">
        <div class="pb-6 md:pb-12 flex">
          <div class="w-1/2">
            <p>Tip Amount</p>
            <p class="opacity-40">/ person</p>
          </div>
          <h1 class="w-1/2 text-end text-strong-cyan"> ${{ this.tip_per_person.toFixed(2) }} </h1>
        </div>
        <div class="flex">
          <div class="w-1/2">
            <p>Total</p>
            <p class="opacity-40">/ person</p>
          </div>
          <h1 class="w-1/2 text-end text-strong-cyan"> ${{ this.total_per_person.toFixed(2) }}</h1>
        </div>
      </div>
      <button class="mx-6 mb-6 md:m-10 bg-[#157679] text-tiber rounded-md font-bold text-lg">RESET</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "calculator",
  data() {
    return {
      bill:null,
      bill_valid:true,
      people:null,
      people_valid:true,
      tip_percent:0,
      custom_tip_percent:null,
      tip_per_person: 0.00,
      total_per_person:0.00
    }
  }
  ,
  methods:
      {
        set_tip_percent(percent)
        {
          this.tip_percent = percent;
          this.bill_valid = false;
          this.people_valid = false;

          if(this.bill) { this.bill_valid = true; }
          if(this.people) { this.people_valid = true; }

          if(this.bill && this.people)
          {
            this.tip_per_person = ( (this.bill * (this.tip_percent / 100)) / this.people );
            this.total_per_person = ( (this.bill * ( 1 + (this.tip_percent / 100) )) / this.people );
          }
        }
      }
}
</script>
