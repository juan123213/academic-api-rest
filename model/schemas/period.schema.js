/** packages  */

const mongoose = require("mongoose");

/**Schema Creation */
const periodSchema = new mongoose.Schema({

    year: {
        type: "Number",
        required: true,
        min: 2020,
        max: 2030,
    },
    number: {
        type: "Number",
        required: true,
        min: 1,
        max: 2
    },
    current: {
        type: "boolean",
        required: true,
        default: ture
    }
});

/** Schema exportation */
module.exports = periodSchema;