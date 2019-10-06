import Api from "./api";

export default {
    async getAlbi() {
     return Api().get("/albi")
    },

    async getAlbiBySerie(serie) {
        return Api().get(`/albi/${serie}`)
    }
}