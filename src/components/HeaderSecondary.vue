<script setup lang="ts"></script>

<template>
  <div id="header">
    <div id="logo"><img src="../assets/logo.svg"></div>
    <div id="home"><img src="../assets/homeWhite.svg"/></div>
<!--         <div id="moneyCount"></div>
 -->  </div>
</template>

<style scoped>
#header {
  width: 100%;
  height: 10vh;
  background: conic-gradient(from -45deg at 50% 50%, #FF8355 0deg, #FF476E 360deg);
  padding: 2vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#home img {
height: 6vh;

}
</style>
