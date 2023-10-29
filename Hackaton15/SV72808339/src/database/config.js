const mongoose = require('mongoose')

const dbConecction = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/hackathon15')
        console.log('Db is online')
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    dbConecction
}