<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>

<script setup>
import Calc from '../src/components/CalculatorComponent.vue'
</script>

<template>
  <div class="wrapper">
    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> 
    </header>

    <Calc />
  </div>
</template>
