const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const badgeTypeSchema = new Schema({
    title: String,
    image_URL: String
});

module.exports = mongoose.model('BadgeType', badgeTypeSchema);