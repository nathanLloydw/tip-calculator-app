<template>
  <div class="w-[64%] h-[50%] bg-white rounded-3xl m-auto mt-20 flex">
    <div class="flex flex-col justify-between my-10 ml-12 mr-6 w-full">
      <div>
        <p class="text-very-dark-cyan pb-2">Bill</p>
        <div class="flex items-center bg-very-light-grayish-cyan pl-6 rounded-lg focus-within:border-2 focus-within:border-strong-cyan">
          <i class="fa-solid fa-dollar-sign text-grayish-cyan"></i>
          <input v-model="this.bill" type="number">
        </div>

      </div>
      <div>
        <p class="text-very-dark-cyan pb-2">Select Tip %</p>
        <div>
          <div class="flex justify-between pb-2">
            <button class="w-[31%]">5%</button>
            <button class="w-[31%]">10%</button>
            <button class="w-[31%]">15%</button>
          </div>
          <div class="flex justify-between">
            <button class="w-[31%]">20%</button>
            <button class="w-[31%]">30%</button>
            <input class="w-[31%]" type="number" placeholder="custom">
          </div>
        </div>
      </div>
      <div>
        <p class="text-very-dark-cyan pb-2">Number of People</p>

        <div class="flex items-center bg-very-light-grayish-cyan pl-6 rounded-lg focus-within:border-2 focus-within:border-strong-cyan">
          <i class="fa-solid fa-user text-grayish-cyan"></i>
          <input v-model="this.people" type="number">
        </div>

      </div>
    </div>

    <div class="w-full my-8 ml-6 mr-8 bg-tiber rounded-2xl flex flex-col justify-between">
      <div class="my-12 mx-8">
        <div class="pb-12 flex">
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
      <button class="m-10 bg-[#157679] text-tiber rounded-md font-bold text-lg">RESET</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "calculator",
  data() {
    return {
      bill:0,
      people:0,
      tip_per_person: 0.00,
      total_per_person:0.00
    }
  }
}
</script>
