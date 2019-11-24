import Api from "./api";

export default {
    async getSerie() {
        return Api().get("/serie");
    },

    async postSerie(data) {
        return Api().post("/serie", data)
    }
}