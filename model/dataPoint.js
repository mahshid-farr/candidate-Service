const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataPointSchema = new Schema({
    candidate:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Candidate",
        require: true
    },
    date:{type: Date, require: true},
    category:{type: String, require: true},
    key:{type: String, require: true},
    oldValue:{type: Schema.Types.Mixed, require:false},
    newValue:{type: Schema.Types.Mixed, require:true},
    assessmentId:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "AssessmentType",
        require: false
    },
    assessmentType:{type: String, require: false}

});

module.exports = mongoose.model('DataPoint', dataPointSchema);