<script setup>
import HeaderSecondary from "../components/HeaderSecondary.vue";
import router from "@/router";
import { onMounted, ref } from "vue";
import { PiggyBankService } from "../service/PiggyBanksService";

const props = defineProps({
  id: String,
});

let banks = [];

const editBank = ref({
  id: props.id,
  name: "",
  quantity: "",
  dueDate: "",
});
onMounted(async () => {
  banks.value = await PiggyBankService.getBankById(props.id);
  editBank.value.name = banks.value.name;
  editBank.value.quantity = banks.value.quantity;
  editBank.value.dueDate = banks.value.dueDate;
});
const save = async (event) => {
  event.preventDefault();
  await PiggyBankService.updateBank(editBank.value);
  router.push("/");
};
</script>

<template>
  <HeaderSecondary />
  <main>
    <form id="detail" @submit="save">
      <label for="formName savingsName" class="title">Nombre:</label>
      <input
        type="text"
        class="targetInput"
        id="formTarget"
        v-model="editBank.value.name"
      />
      <label for="formTarget savingsTarget">Objetivo:</label>
      <input
        type="text"
        class="targetInput"
        id="formTarget"
        v-model="editBank.value.quantity"
      />
      <label for="formDate savingsTarget">Fecha:</label>
      <input
        type="date"
        class="targetInput"
        id="formDate"
        v-model="editBank.value.dueDate"
      />
      <div class="acceptCancel">
        <div class="icon accept">
          <button type="button" @click="submit" src="../assets/editIcon.svg">ACEPTAR</button>
        </div>
        <div class="icon cancel">
          <button type="button" @click="router.go(-1)">CANCELAR</button>
        </div>
      </div>
    </form>
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
.title {
  font-family: "Arimo", sans-serif;
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
  font-family: "Arimo", sans-serif;
  font-size: 2.5vh;
}
input {
  width: 65vw;
  height: 10vh;
  border: 0.2vh solid var(--color-palette-2);
  border-radius: 4vh;
}
.acceptCancel {
  display: flex;
  justify-content: space-around;
  margin: 4vh 0 3vh 0;
  width: 70vw;
}

button {
  width: 15vw;
  height: 6vh;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 2vh;
  font-weight: 700;
  font-family: "Arimo", sans-serif;
}

.accept {
  background-color: var(--color-palette-5);
  border-radius: 3vh;
}
.cancel {
  background-color: var(--color-palette-3);
  border-radius: 3vh;
}
@media (min-width: 700px) {
  img {
    width: 5vw;
  }
}
@media (max-width: 750px) {
  button {
    width: 25vw;
    font-size: 1.5vh;
  }
}
</style>
