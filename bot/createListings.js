const {bot} = require('./sharedInstances');
const Timer = require('./scheduler');


exports.createListings = async(client, newListing, msg) => {
    const result = await client.create(newListing);
    console.log(result, "the created data");
    bot.sendMessage(msg.chat.id, "Your Emotions are avalible in Addis Ababa");
    bot.sendMessage(msg.chat.id, " here https://www.soultrack.com");

    await Timer.Timer(newListing._id, msg);
}