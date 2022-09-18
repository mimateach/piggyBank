import axios from "axios";

export default class PiggyBankService {
  url = "http://127.0.0.1:5173/";

  getAll() {
    return axios.get("this.url + "all");
  }
}

//en el controlador, en Java (supuestamente piggyBanksController.java), tenemos que ir a @RequestMapping(value="/api/v1"), ese value se lo añadimos a la URL del host y esa será la URL base.
//en el controlador, de nuevo en Java, en @GetMapping(value= "/all") pillamos el return (en el vídeo es return personaServiceAPI.getAll(""). Añadimos "all" al this.url



