const { bot, event } = require('./sharedInstances');
const cron = require('node-cron');
const emotioncoll = require('../api/research/model');

async function Timer(id, msg) {
    const task =
        cron.schedule('*/20 * * * *', async () => {
           // console.log('Running a task every 2 minute');
            "use strict";
            if (await doSomething(id)) {
                event.emit('JOB COMPLETED');
            }
            });
    "use strict";
    event.on('JOB COMPLETED', () => {
        //console.log('Job done!');
        bot.sendMessage(msg.chat.id, "You have finished your time You can now post your fellings");
        task.stop();
    });
}



async function doSomething(id) {
    let MakeTrue = true;
    Number(id);
    Boolean(MakeTrue);
    const filter = {
        _id: id
    };
    const update = {
        expired: "true",
        longitude: null,
        latitude: null,
        emotion: null
    };
    await emotioncoll.findOneAndUpdate(filter, update,(err,doc)=>{
    if(err)
    {
        console.log(err);
    }
    });
    
    const filtered = await emotioncoll.findOne(filter);

    "use strict";
    if (filtered.expired) {
        return filtered.expired;
    }
    else {
        return filtered.expired;
    }
}


module.exports.Timer = Timer;
