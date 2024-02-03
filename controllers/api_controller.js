const asyncHandler = require("express-async-handler")
const Character = require('../Schemas/Character')


exports.index = asyncHandler(function(req,res,next) {
    res.send("HELLO FROM THE API !:D!:D");
})






exports.character_pos_post = [
    asyncHandler(async function(req,res,next) {
       const character =  await Character.find({
            x_coordinate: {
                $lte: parseInt(req.body.x_coordinate) + 5,
                $gte: parseInt(req.body.x_coordinate) - 5
            },
            y_coordinate: {
                $lte: parseInt(req.body.y_coordinate) + 5,
                $gte: parseInt(req.body.y_coordinate) - 5
            }
        }).exec();
        if(character.length > 0) {
            res.status(200).json({
                character
            })
        } else {
            res.status(200).json({
                found:false,
            })
        }
    }) 

]


