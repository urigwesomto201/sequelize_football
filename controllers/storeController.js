const { UUIDV4 } = require('sequelize');
const storeModel = require('../models/store');

exports.createStore = async (req, res) => {
    try {
        const { storename, location, email } = req.body;
        //check if store is existing
    
    const storeExist = await storeModel.findOne({ where: {
        email: email.toLowerCase () 
    }})
const newStore = await storeModel.create({
    storename, location, email
})
    if(storeExist){
        return res.status(400).json({
            message: "Store not created successfully",
            data: newStore
        })
    }else{
        return res.status(201).json({
            message: "Store created successfully",
            data: newStore
        })
    }
    } catch (error){
        res.status(500).json({
            message: "Internal Server Error" + error.message
            
        })

    }
}