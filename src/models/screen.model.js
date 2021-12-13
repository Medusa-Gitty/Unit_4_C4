const { Schema , model } = require("mongoose");

const screenSchema = new Schema ({

screen_name:{type: String , required:true},
theatre:{type: Schema.Types.ObjectId , ref : "theatre", required:true },

},
{
    versionKey:false,
    timestamps:true
});

module.exports = model("screen" ,screenSchema);