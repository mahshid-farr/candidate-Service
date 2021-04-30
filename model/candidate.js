const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const preferredEmploymentTypes = Object.freeze({
    Temporary: 'temporary',
    Permanent: 'permanent',
    Volunteer: 'volunteer',
    Full_time: 'full_time',
    Part_time: 'part_time',
    Commission: 'commission',
    Internship: 'internship',
    Apprenticeship: 'apprenticeship',
});

const proficiencyLevels = Object.freeze({
    Beginner: 'beginner',
    Intermediate: 'intermediate',
    Advanced: 'advanced',
    Fluent: 'fluent'
});

const candidateSchema = new Schema({

    active:{type: Boolean, require: true},
    username:{type: String, require: true},
    fullname:{type: String, require: true},
    displayname:{type: String, require: false},
    personal_information:{
        address:{
                _id:false,
                street:{type: String, require:false},
                city: {type: String, require:false},
                province :{type: String, require:false},
                postal_code:{type: String, require:false},
                country: {type: String, require:false}
            },
        contact:{
                _id:false,
                phone: {type: String, require:false},
                email: {type: String, require:false}
            }
    },

    education:[
       {
        _id:false,
        instituation: {type: String, require:false},
        accreditation: {type: String, require:false},
        field:  {type: String, require:false},
        start: {type: Date, require:false},
        end:   {type: Date, require:false},
        complete: {type: Boolean, require: true}
       }
    ],

    exprience:[
        {
        _id:false,
        title:{type: String, require:false},
        employmentType:{type: String, require:false},
        organization: {type: String, require:false},
        location:{type: String, require:false},
        current: {type: Boolean, require:false},
        start:{type: Date, require:false},
        end:  {type: Date, require:false}
        }
    ],

    jobPreferences:{
        _id:false,
        willingToTravel: {type: Number, require:false},
        willingToRelocate: {type: Number, require:false},
        fieldOfInterest:   {type: String, require:false},
        desiredSalary: {type: Number, require:false},
        workRemotely:{type: Boolean, require:false},
        preferredEmploymentType:[{
            type: String,
            enum: Object.values(preferredEmploymentTypes)
        }],
        preferredWorkingHours: {type: String, require:false},
        noticePeriod: {type: Number, require:false}
    },

    miscellaneous:{
        _id:false,
        workEligibility:  {type: Boolean, require:true},
        languages:[
            {
                _id:false,
                name: {type: String, require:false},
                proficiencyLevel:{
                    type: String,
                    enum: Object.values(proficiencyLevels)
                }
            }
        ],
        interest:[String]
    },

    engagementProfile:{
        _id:false,
        xp: {type: Number, min:0, require:false},
        badges:[{
            type: mongoose.SchemaTypes.ObjectId,
            ref: "BadgeType",
            require: true
        }]
    },

    events:[{
        _id:false,
        time: {type: Date, require:false},
        type: {type: String, require:true},
        message: {type: String, require:false},
        data: {type: Schema.Types.Mixed, require:false}
    }]
});

Object.assign(candidateSchema.statics, { preferredEmploymentTypes })
Object.assign(candidateSchema.statics, { proficiencyLevels })

module.exports = mongoose.model('Candidate', candidateSchema);
