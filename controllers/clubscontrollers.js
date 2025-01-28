// import model
const clubMobel = require('../models/footballclubs')

//require uuid
const {v4: uuid} = require('uuid')
// create a new club

exports.createClub = async (req,res)=> {
    try {
        //extract data from the request body
        const {name,ucl,coach,topsix,stadium}= req.body
        // check the club in the dataase by name 
        const nameFound = await clubMobel.findAll({where:{name:name}})
        //check if the name exist
        if(nameFound.length == 1){
            res.status(404).json({
                message: 'club with NAME: ${name} already exist'
            })
        }else{}
//create a new inatance for the club data to the database

const newClub = await clubMobel.create({
    id: uuid(),
    name,
    ucl,
    coach,
    topsix,
    stadium
})
//send a success responses
res.status(201).json({
    message: 'CLUB created successfully',
    data: newClub
})

    } catch (error) {
        res.status(500).json({
            message: 'interval server error'+ error.message
        })
    }
}
exports.getAll = async (req,res)=>{
    try {
       const allClub = await clubMobel.findAll()

//send a success responses
res.status(201).json({
    message: ' ALL CLUB IN THE DATABASE',
    data: allClub,
    total: allClub.length
})

    } catch (error) {
        res.status(500).json({
            message: 'interval server error'+ error.message
        })
    }
}
exports.getOne = async (req,res)=>{
    try {
        // get the id from the params 
        const {id} = req.params
        //find he club
        const Club = await clubMobel.findAll({where:{id:id}})
        if (Club.length == 0){
            res.status(404).json({
                message: 'club not found'
            })
        }else{
            res.status(200).json({
                message: 'club with ID: ${id} found',
                data: Club
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'interval server error'+ error.message
        })
    }
}
exports.upddateClub = async (req,res)=>{
    try {
         // get the id from the params 
         const {id} = req.params
          //extract data from the request body
        const {name,ucl,coach,topsix,stadium}= req.body
         //find he club
         const Club = await clubMobel.findAll({where:{id:id}})
         if (Club.length == 0){
             res.status(404).json({
                 message: 'club unable to update'
                 
             })
         }else{
            const data = {
                name,ucl,coach,topsix,stadium
            }
            //updating thr data to the dataase
        await clubMobel.update(data,{where:{id:id}})
//find the club 
        const Club = await clubMobel.findAll({where:{id:id}})
             res.status(200).json({
                 message: 'club updated',
                 data: Club
             })
         }
    } catch (error) {
        res.status(500).json({
            message: 'interval server error'+ error.message
        })
    }
}

exports.deleteCkub = async (req,res)=>{
    
        try {
            // get the id from the params 
            const {id} = req.params
            //find he club
            const Club = await clubMobel.findAll({where:{id:id}})
            if (Club.length == 0){
                res.status(404).json({
                    message: 'club unable to delete'
                })
            }else{
                // delete data from the dataase
                await clubMobel.destroy({where:{id:id}});
                
                res.status(200).json({
                    message: 'club deleted succesfully ',
                    
                })
            }
    } catch (error) {
        res.status(500).json({
            message: 'interval server error'+ error.message
        })
    }
}