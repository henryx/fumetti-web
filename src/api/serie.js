import Api from "./api";

export default {
    async getSerie() {
        return Api().get("/serie");
    }
}