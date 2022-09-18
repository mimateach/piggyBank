<script setup lang="ts">
import Header from "../components/Header.vue";
import NavBar from "../components/NavBar.vue";

</script>

<template>
  <main>
    <Header />
    <section>
      <div id="appName">
            <img id="name" src="../assets/logoLarge.svg">
        </div>
        <div id="boxes">
            <div id="piggyBanks">
                <div class="piggyBank" >
                    <div><h5>Nombre hucha</h5></div>
                    <div><h3>200€</h3></div>
                </div>
            </div>
        <div id="piggyBanks">
            <div class="piggyBank" >
                <div><h5>Nombre hucha</h5></div>
                <div><h3>200€</h3></div>
            </div>
        </div>
        <div id="piggyBanks">
                <div class="piggyBank" >
                    <div><h5>Nombre hucha</h5></div>
                    <div><h3>200€</h3></div>
                </div>
            </div>
        <div id="piggyBanks">
            <div class="piggyBank" >
                <div><h5>Nombre hucha</h5></div>
                <div><h3>200€</h3></div>
            </div>
        </div>
        <div id="piggyBanks">
                <div class="piggyBank" >
                    <div><h5>Nombre hucha</h5></div>
                    <div><h3>200€</h3></div>
                </div>
            </div>
            <div id="piggyBanks">
                <div class="piggyBank" >
                    <div><h5>Nombre hucha</h5></div>
                    <div><h3>200€</h3></div>
                </div>
            </div>
    </div>
        <div id="btnAddPB">
            <button id="newPiggyBank">
                NUEVA HUCHA
            </button>
        </div>
    </section>
<NavBar />
  </main>
</template>


<style scoped>
main {
    background-color: var(--bg-primary-color);
}
.piggyBank{
    width: 35vw;
    height: 15vh;
    background-color: white;
    border: solid var(--border-color-boxes) 0.vh;
    border-radius: 2vh;
    box-shadow: 0px 5px 4px rgba(255, 74, 109, 0.4);
    margin-top: 2vh ;
    margin-bottom: 2vh;
}

#appName{
    display: flex;
    justify-content: center;
    margin-top: 3vh;
    margin-bottom: 3vh; 
}

#boxes{
    display:grid;
    grid-template-columns: auto auto;
    justify-content: space-around;
}

#btnAddPB{
    display: flex;
    justify-content: center;
    padding: 3vh;
}
#newPiggyBank{
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
</style>
