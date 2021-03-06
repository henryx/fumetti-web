import Api from "./api";

export default {
    async getValuta() {
        return Api().get("/valuta");
    },

    async getRilegatura() {
        return Api().get("/rilegatura");
    },

    async getConservazione() {
        return Api().get("/conservazione");
    },

    async getStatusSerie() {
        return Api().get("/status_serie");
    },
    async getFreq() {
        return Api().get("/periodicita");
    },
    async getGenere() {
        return Api().get("/genere_serie");
    },
}