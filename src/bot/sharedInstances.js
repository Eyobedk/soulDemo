//const mongoose = require('mongoose')
const TelegramBot = require('node-telegram-bot-api');
const EventEmitter = require('events');
const configs = require('../configs');

const event = new EventEmitter();
const bot = new TelegramBot(configs.token, {
    polling: true
});


module.exports = {bot,event};
