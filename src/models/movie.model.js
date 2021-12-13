const { Schema , model } = require("mongoose");

const movieSchema = new Schema ({

movie_name:{type: String , required:true},
actors:[{type: String , required:true }],
language:[{type: String , required:true }],
director:{type: String , required:true },
movie_poster:{type: String , required:true },

},
{
    versionKey:false,
    timestamps:true
});

module.exports = model("movie" , movieSchema);