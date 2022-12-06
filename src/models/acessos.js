const mongoose = require('mongoose');

const acessoSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId
        },
        name: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        rg: {
            type: Number,
            required: true,

        },
        entrace: {
            type: String,
            required: true,

        },
        departure: {
            type: String,
            required: true,

        }
    }

);

const Model = mongoose.model("acesso", acessoSchema);

module.exports = Model