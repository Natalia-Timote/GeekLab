import { Mongo } from "../database/mongo.js";
import { ObjectId } from "mongodb";

const collectionName = "items";

export default class ItemsDataAccess {
    async getItems() {
        const result = await Mongo.db
            .collection(collectionName)
            .find({})
            .toArray()

        return result;
    }

    async getAvailableItems() {
        const result = await Mongo.db
            .collection(collectionName)
            .find({ available: true })
            .toArray()

        return result;
    }

    async addItem(itemData) {
        const result = await Mongo.db
            .collection(collectionName)
            .insertOne(itemData)

        return result;
    }

    async deleteItem(itemId) {
        const result = await Mongo.db
            .collection(collectionName)
            .findOneAndDelete({ _id: new ObjectId(itemId) })

        return result
    }

    async updateItem(itemId, itemData) {
        const result = await Mongo.db
            .collection(collectionName)
            .findOneAndUpdate(
                { _id: new ObjectId(itemId) },
                { $set: itemData }
            )

        return result;
    }
}
