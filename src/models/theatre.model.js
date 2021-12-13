const { Schema , model } = require("mongoose");

const theatreSchema = new Schema ({

theatre_name:{type: String , required:true},
location:{type: String , required:true },

},
{
    versionKey:false,
    timestamps:true
});

module.exports = model("theatre" , theatreSchema);