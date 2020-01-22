import Api from "./api";

export default {
    async getCollane() {
        return Api().get("/collane");
    },

    async postCollane(data) {
        return Api().post("/collane", data)
    }
}