<script setup lang="ts"></script>

<template>
  <div>
    <h2 class="title"></h2>
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
    <div class="icon"></div>
    <div class="icon"></div>
  </div>
</template>
<style scoped></style>
