import Api from "./api";

export default {
    async getEditore() {
        return Api().get("/editore");
    }
}