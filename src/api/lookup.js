import Api from "./api";

export default {
    async getValuta() {
        return Api().get("/valuta");
    }
}