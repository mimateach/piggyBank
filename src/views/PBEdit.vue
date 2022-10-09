<script setup lang="ts">
import HeaderSecondary from "../components/HeaderSecondary.vue";</script>

<template>
  <HeaderSecondary />
  <main>
    <div>
      <h2 class="title">Viaje a Nueva York</h2>
    </div>
    <form id="detail">
      <label for="formTarget savingsTarget">Objetivo:</label>
      <input type="text" class="targetInput" id="formTarget" />
      <label for="formDate savingsTarget">Fecha:</label>
      <input type="text" class="targetInput" id="formDate" />
      <label for="formMoves savingsTarget">Movimientos:</label>
      <input type="text" class="targetInput" id="formMoves" />
    </form>
    <div class="editDelete">
      <div class="edit icon"><img src="../assets/editIcon.svg"/></div>
      <div class="delete icon"><img src="../assets/deleteIcon.svg" /></div>
    </div>
  </main>
</template>
<style scoped>
main {
  background-color: var(--bg-secondary-color);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  font-family: 'Arimo', sans-serif;
  font-weight: 700;
  margin: 5vh 0 2vh 0;
}
form {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
label {
  margin: 2vh 0 2vh 0;
  font-family: 'Arimo', sans-serif;
  font-size: 2.5vh;
}
input {
  width: 65vw;
  height: 10vh;
  border: 0.2vh solid var(--color-palette-2);
  border-radius: 4vh;
}
.editDelete {
  display: flex;
  justify-content: space-around;
  margin: 3vh 0 3vh 0;
  width: 30vw;
}
img {
  width: 10vw;
}

@media (min-width: 700px) {
  img {
    width: 5vw;
  }
}
</style>
