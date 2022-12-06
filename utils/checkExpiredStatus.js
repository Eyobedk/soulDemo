exports.checkStatus= async(id, client) =>{
    const filtered = await client.findById(id);
    console.log(filtered.expired, "for existing user"); // true
    return filtered.expired;
};