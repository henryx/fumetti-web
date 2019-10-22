import Api from "./api";

export default {
    async getValuta() {
        return Api().get("/valuta");
    },

    async getRilegatura() {
        return Api().get("/rilegatura");
    }
}