
const path = "../public/location/loca.jpg";
const emotioncoll = require('../api/research/model');
const check = require('../bot/varifyandRegister');
const {bot,event} = require('../bot/sharedInstances')
const fs = require("fs");

exports.main = async()=> {
    try {
        bot.onText(/\/start/, (msg) => {
            bot.sendMessage(msg.chat.id, "πWelcome Please Use /emo to send your felling\n");
        });
        bot.onText(/^\/emo/, function (msg) {
            global.option;
            option = {
                "reply_markup": {
                    "keyboard": [
                        ["π", "π"],
                        ["π‘", "π²"]
                    ]
                }
            };
            bot.sendMessage(msg.chat.id, " π = i am Happy  π= i am sad \nπ‘ = i am angry  π² = i am excited", option).then(() => {
                bot.once("message", async (msg) => {

                    var Felling = [
                        ["π", "π"],
                        ["π‘", "π²"]
                    ];
                    if (msg.text.includes(Felling[0][0]) || msg.text.includes(Felling[0][1])  || msg.text.includes(Felling[1][0]) ||msg.text.includes(Felling[1][1]) ) { //little bit of exception
                        bot.sendMessage(msg.chat.id, "OK. now \n send us your location use /locate to start");
                        global.mess = msg.text                        

                        event.emit('ID SET');
                    } else {
                        bot.sendMessage(msg.chat.id, "please send your emotion using the given buttons \n use /emo to try again");
                    }
                })
            })
        });
        bot.onText(/^\/locate/, function (msg) {
            console.log(msg.chat.id)
                bot.sendMessage(msg.chat.id, "here is how to do it");
                bot.sendPhoto(msg.chat.id, "https://res.cloudinary.com/forfeta/image/upload/v1670365445/loca_jsrhnp.jpg");
                bot.once("location", async (msg) => {

                    if (msg.location.longitude) {
                            global.locations = [msg.chat.id, msg.location.longitude, msg.location.latitude];
                            bot.sendMessage(msg.chat.id, "Your Emotions are avalible in Ethiopia");
                            bot.sendMessage(msg.chat.id, " here http://localhost:5000/");
                            event.emit('ID SET', msg);
                        }else{bot.sendMessage(msg.chat.id, "please send your emotion using the given buttons \n use /locate to try again");}
                    })
   

        })
        event.on('ID SET', (msg) => {
            if (mess && global.locations) {
                "use strict";
                check.check(locations, mess, emotioncoll, msg);
            }
            "use strict";
        });

    } catch (e) {
        bot.sendMessage(msg.chat.id, "follow the instruction properly \n /emo to try again");
    }

}