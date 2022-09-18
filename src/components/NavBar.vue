<script setup lang="ts"></script>
<template>
  <main>
    <div id="menu">
      <div class="menuSection menuHome">Inicio</div>
      <div class="menuSection menuAdd">+</div>
      <div class="menuSection menuWithdraw">-</div>
      <div class="menuSection menuSavings">Movimientos</div>
    </div>
  </main>
</template>
<style scoped>
/* main {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
} */
#menu {
  border-top: 0.2vh solid var(--border-color-nav);
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-around;
  padding: 2vh;
  background-color: white;
  height: 10vh;
}
.menuSection {
  width: 15vw;
  height: 7vh;
  border-radius: 50%;
}
.menuHome {
  background-color: var(--color-palette-2);
}
.menuAdd {
  background-color: var(--color-palette-3);
}
.menuWithdraw {
  background-color: var(--color-palette-4);
}
.menuSavings {
  background-color: var(--color-palette-5);
}
</style>
