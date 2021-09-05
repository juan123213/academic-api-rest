/** packages  */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/**Schema Creation */
const vehicleSchema = new mongoose.Schema({

    plate: {
        type: "String",
        required: true,
        unique: true
    },
    name: {
        type: "String",
        required: true,
    },
    color: {
        type: "String",
        required: true,
    },
    brand: {
        type: "String",
        required: true,
    }
});

/** Schema exportation */
vehicleSchema.plugin(validator);
module.exports = vehicleSchema;