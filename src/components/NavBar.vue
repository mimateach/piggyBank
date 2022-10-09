<script setup lang="ts"></script>
<template>
  <main>
    <div id="menu" class="fixed-bottom">
      <div class="menuSection menuHome">
        <img id="name" src="../assets/homeBeige.svg">
      </div>
      <div class="menuSection menuAdd">
        <img id="name" src="../assets/navBarPlus.svg">
      </div>
      <div class="menuSection menuWithdraw">
        <img id="name" src="../assets/navBarLess.svg">
      </div>
      <div class="menuSection menuSavings">
        <img id="name" src="../assets/navBarTransfer.svg">
      </div>
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
.menuSection img {
width: 6vw;
}
.menuHome {
}
.menuAdd {
}
.menuWithdraw {
}
.menuSavings {
}

@media (max-width: 1000px){
.menuSection img {
width: 10vw;
}
}
</style>
