const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();
const PORT = config.get('serverPort')
const start = async () => {
    try {
        await mongoose.connect(config.get('dbURL'));
        app.listen(PORT, () => {
            console.log('port', PORT)
        })
    } catch (e) {

    }
}
start();