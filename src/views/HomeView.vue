<script setup>
import NavBar from "../components/NavBar.vue";
import { ref, onMounted } from "vue";
import { PiggyBankService } from "../service/PiggyBanksService";
import Header from "../components/Header.vue";
import { RouterLink } from "vue-router";

const BankData = ref([]);
onMounted(async () => {
  BankData.value = await PiggyBankService.getAllPiggyBanks();
});
</script>

<template>
  <main>
    <Header />
    <div id="appName">
      <img id="name" src="../assets/logoLarge.svg" />
    </div>
    <div id="boxes">
      <div v-for="bank in BankData" v-bind:key="bank" id="piggyBankList">
        <div class="piggyBank">
          <div class="text">
            <div class="text-item">
              <h5>{{ bank.name }}</h5>
            </div>
            <div class="text-item">
              <h3>{{ bank.quantity }}</h3>
            </div>
            <div class="text-item">
              <h6>{{ bank.dueDate }}</h6>
            </div>
          </div>
          <div class="editDelete">
            <RouterLink to="/edit"
              ><div class="edit icon">
                <img src="../assets/editIcon.svg" /></div
            ></RouterLink>
            <div class="delete icon">
              <img src="../assets/deleteIcon.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="btnAddPB">
      <RouterLink to="/new"
        ><button id="newPiggyBank">NUEVA HUCHA</button></RouterLink
      >
    </div>
    <NavBar />
  </main>
</template>

<style scoped>
main {
  background-color: var(--bg-primary-color);
}
.piggyBank {
  width: 20vw;
  height: 25vh;
  background-color: white;
  border: solid var(--border-color-boxes) 0vh;
  border-radius: 5vh;
  box-shadow: 0px 5px 4px rgba(255, 74, 109, 0.4);
  margin-top: 2vh;
  margin-bottom: 2vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.text {
  height: 75vh;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.text-item {
  padding: 0.5vh 0 0.5vh 0;
  font-family: "Arimo", sans-serif;
  font-size: 3vh;
}

h5 {
  font-weight: 700;
}

h3 {
  color: var(--color-palette-4);
} 


#appName {
  display: flex;
  justify-content: space-around;
  margin-top: 3vh;
  margin-bottom: 3vh;
}

#boxes {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-around;
}

#btnAddPB {
  display: flex;
  justify-content: center;
  padding: 3vh;
}
#newPiggyBank {
  border-radius: 1.5vh;
  background-color: var(--color-palette-4);
  border: none;
  padding: 1vh;
  text-align: center;
  color: white;
  font-weight: 700;
  width: 25vw;
  height: 7vh;
  font-size: 2.5vh;
}
.editDelete {
  display: flex;
  justify-content: space-evenly;
  width: 15vw;
  height: 15vh;
  margin: 0.5vh 0 0.5vh 0;
}
.icon img {
  width: 3vw;
}

@media (min-width: 1024px) {
  /* #boxes {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-around;
} */
}
@media (max-width: 860px){
  #boxes{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .piggyBank { 
    width: 55vw;
  height: 25vh;
  }
  .editDelete {
    width: 25vw;
    display: flex;
    justify-content: space-around;
  }
  .icon img {
  width: 6vw;
}
}
</style>
