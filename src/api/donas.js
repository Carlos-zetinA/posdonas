import { ENV } from "../utils/Constantes"
import Axios from "axios"

export class Dona {
    baseApi = ENV.BASE_API;

    async createDona(data) {
        try {
            const formData = new FormData();
            Object.keys(data).forEach((key) => {
                formData.append(key, data[key]);
            });

            const response = await Axios.post(`${this.baseApi}/${ENV.API_ROUTES.CREATEDONA}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            console.log("Se agregó la dona correctamente");
            return response.data;
        } catch (error) {
            console.error("Error al crear dona:", error);
            throw error;
        }
    }

    async getDonas() {
        try {
            const url = `${this.baseApi}/${ENV.API_ROUTES.GETDONA}`;
            const response = await Axios.get(url);
            return response.data;
        } catch (err) {
            console.error("Error al obtener donas:", err);
            return [];
        }
    }

    async deleteDona(id) {
        try {
            const url = `${this.baseApi}/${ENV.API_ROUTES.DELETEDONA}/${id}`;
            await Axios.delete(url);
            console.log("Dona eliminada correctamente");
        } catch (error) {
            console.error("Error al eliminar dona:", error);
            throw error;
        }
    }
}
