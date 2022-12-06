const { bot } = require('./sharedInstances');
const Timer = require('./scheduler');
const {createListings} = require('./createListings')
const {checkStatus}= require('../utils/checkExpiredStatus');

async function check(ChatIdAndLocations, messgaess, emotioncoll, msg) {
    "use strict";
     const filter = { _id: ChatIdAndLocations[0] };
     const update = { longitude: ChatIdAndLocations[1], latitude: ChatIdAndLocations[2],
                        emotion: messgaess };
    
    await emotioncoll.exists({
        _id: ChatIdAndLocations[0]
    }).then(
       async (user) => {
            if (user) {
                const expiredOrNot = await Promise.resolve(checkStatus(ChatIdAndLocations[0], emotioncoll));
                if (expiredOrNot) {
                   
                    await emotioncoll.findOneAndUpdate(filter, update, (err, result) => {
                        if (err) return console.log(err);
                        try {
                            "use strict";
                            bot.sendMessage(msg.chat.id, "Your Emotions are avalible in Ethiopia");
                            bot.sendMessage(msg.chat.id, "here http://localhost:5000/");
                        } 
                        catch (e) { console.log(e)} } )
                        
                        .then(()=>{Timer.Timer(ChatIdAndLocations[0], msg);})
                    
                } else return bot.sendMessage(msg.chat.id, "😊 Sorry Your next post will be after six hours\n Don't worry we will remind you when your time is up ")


             } else {
                console.log("new user");
                let falsify = 0;
                Boolean(falsify);
                await createListings(emotioncoll, { _id: ChatIdAndLocations[0],
                    emotion: messgaess, 
                    longitude: ChatIdAndLocations[1],
                    latitude: ChatIdAndLocations[2], 
                    expired: falsify }, msg) .catch(err, console.log(err));
                 };
                 })
}


module.exports.check = check;
