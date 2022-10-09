<script setup lang="ts">
import NavBar from "../components/NavBar.vue";
import { ref, onMounted } from "vue";
import { PiggyBankService } from "../service/PiggyBanksService";
const BankData = ref([]);
onMounted(async () => {
  BankData.value = await PiggyBankService.getAllPiggyBanks();
});
</script>

<template>
  <main>
    <section>
      <div id="appName">
        <img id="name" src="../assets/logoLarge.svg" />
      </div>
      <div id="boxes">
        <div v-for="(bank, index) in BankData" :key="index" id="piggyBankList">
          <div class="piggyBank">
            <div>
              <h5>{{ bank.name }}</h5>
            </div>
            <div>
              <h3>{{ bank.quantity }}</h3>
            </div>
            <div>
              <h6>{{ bank.dueDate }}</h6>
            </div>
          </div>
        </div>
        <div id="piggyBanks">
          <div class="piggyBank">
            <div><h5>Nombre hucha</h5></div>
            <div><h3>200€</h3></div>
          </div>
        </div>
        <div id="piggyBanks">
          <div class="piggyBank">
            <div><h5>Nombre hucha</h5></div>
            <div><h3>200€</h3></div>
          </div>
        </div>
        <div id="piggyBanks">
          <div class="piggyBank">
            <div><h5>Nombre hucha</h5></div>
            <div><h3>200€</h3></div>
          </div>
        </div>
        <div id="piggyBanks">
          <div class="piggyBank">
            <div><h5>Nombre hucha</h5></div>
            <div><h3>200€</h3></div>
          </div>
        </div>
        <div id="piggyBanks">
          <div class="piggyBank">
            <div><h5>Nombre hucha</h5></div>
            <div><h3>200€</h3></div>
          </div>
        </div>
      </div>
      <div id="btnAddPB">
        <button id="newPiggyBank">NUEVA HUCHA</button>
      </div>
    </section>
    <NavBar />
  </main>
</template>

<style scoped>
main {
  background-color: var(--bg-primary-color);
}
.piggyBank {
  width: 30vw;
  height: 15vh;
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
}

@media (min-width: 1024px) {
  /* #boxes {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-around;
} */
}
</style>
