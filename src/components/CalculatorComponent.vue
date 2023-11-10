<!-- Calculator component -->
<template>
  <!-- header aligned in the middle -->
  <h1 style="text-align: center">Simple Calculator on Vue.js</h1>
  <br />
  <div class="calculator">
    <!-- display field and history field (separate)-->
    <div class="display">
      <div>{{ history }}</div>
      <div>{{ result }}</div>
      </div>

    <div class="buttons">
      <button @click="clear">AC</button>
      <button @click="sign">+/-</button>
      <button @click="percent">%</button>
      <button @click="operation('/')">÷</button>
      <button @click="append(7)">7</button>
      <button @click="append(8)">8</button>
      <button @click="append(9)">9</button>
      <button @click="operation('*')">x</button>
      <button @click="append(4)">4</button>
      <button @click="append(5)">5</button>
      <button @click="append(6)">6</button>
      <button @click="operation('-')">-</button>
      <button @click="append(1)">1</button>
      <button @click="append(2)">2</button>
      <button @click="append(3)">3</button>
      <button @click="operation('+')">+</button>
      <button @click="append(0)">0</button>
      <button @click="append('.')">.</button>
      <button @click="operation('=')">=</button>
    </div>
  </div>
</template>

<script>
// calculator with history. "=" to calcutate result
export default {
  data() {
    return {
      history: '',
      result: '',
      operator: '',
      operand: '',
      isCalculated: false,
    }
  },
  methods: {
    clear() {
      this.history = ''
      this.result = ''
      this.operator = ''
      this.operand = ''
      this.isCalculated = false
    },
    sign() {
      if (this.result) {
        this.result = this.result * -1
      }
    },
    percent() {
      if (this.result) {
        this.result = this.result / 100
      }
    },
    append(number) {
      if (this.isCalculated) {
        this.clear()
      }
      this.result = `${this.result}${number}`
    },
    operation(operator) {
      if (this.isCalculated) {
        this.isCalculated = false
      }
      if (this.operator) {
        this.calculate()
      }
      this.operator = operator
      this.history = `${this.result} ${this.operator}`
      this.operand = this.result
      this.result = ''
    },
    calculate() {
      if (this.operator && this.operand && this.result) {
        this.history = `${this.history} ${this.result}`
        this.result = eval(`${this.operand} ${this.operator} ${this.result}`)
        this.operator = ''
        this.operand = ''
        this.isCalculated = true
      }
    },
  },
}
</script>

<style scoped>
.calculator {
  background-color: #acacac;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 2rem;
  padding: 1rem;
  text-align: right;
  color: black;
}
.buttons {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  margin: 1rem auto;
  /* max-width: 400px; */
  width: 19rem;
  padding: 0 1rem;
}
.display {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
}
</style>
