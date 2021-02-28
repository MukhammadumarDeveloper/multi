const mongoose = require('mongoose')

const MatnSchema = new mongoose.Schema({
    title: {
        uz: {type: String, require: true},
        ru: {type: String, require: true},
        en: {type: String, require: true}
    },
    description: {
        uz: {type: String, require: true},
        ru: {type: String, require: true},
        en: {type: String, require: true}
    }

})
