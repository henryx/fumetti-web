import Api from "./api";

export default {
    async getCollane() {
        return Api().get("/collane");
    }
}