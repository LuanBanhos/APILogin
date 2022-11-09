const mongoose = require('mongoose');

async function startDB(){
    await mongoose.connect('mongodb+srv://LuanPB:a1b2c3@cluster0.2r3tsfj.mongodb.net/test');
}

module.exports = startDB;