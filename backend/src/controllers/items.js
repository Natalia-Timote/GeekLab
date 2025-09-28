import ItemsDataAccess from "../dataAccess/items.js";
import { ok, serverError } from "../helpers/httpResponse.js";

export default class ItemsControllers {
    constructor() {
        this.dataAccess = new ItemsDataAccess();
    }

    async getItems() {
        try {
            const items = await this.dataAccess.getItems();

            return ok(items);
        } catch (error) {
            return serverError(error);
        }
    }

    async getAvailableItems() {
        try {
            const items = await this.dataAccess.getAvailableItems();

            return ok(items);
        } catch (error) {
            return serverError(error);
        }
    }

    async addItem(itemData) {
        try {
            const result = await this.dataAccess.addItem(itemData);

            return ok(result);
        } catch (error) {
            return serverError(error);
        }
    }

    async deleteItem(itemId) {
        try {
            const result = await this.dataAccess.deleteItem(itemId);

            return ok(result);
        } catch (error) {
            return serverError(error);
        }
    }

    async updateItem(itemId, itemData) {
        try {
            const result = await this.dataAccess.updateItem(itemId, itemData);

            return ok(result);
        } catch (error) {
            return serverError(error);
        }
    }
}
