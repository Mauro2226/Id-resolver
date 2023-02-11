/**
 * 
 * @param {string} channelId - The channel id
 * @param {string} guildId - The guild id
 * @param {object} client - The client instance
 * @returns {object} - The resolver channel
 */
exports.resolveChannel = function(channelId,guildId,client){

        let guild = client.guilds.cache.get(guildId) 

        if(guild != undefined){
            let channel = guild.channels.cache.get(channelId)
            return channel
        }else{
            console.log("Guild id undefined!")
        }
}

/**
 * 
 * @param {string} roleId - The role id
 * @param {string} guildId - The guild id
 * @param {object} client - The client instance
 * @returns {object} - The resolved role
 */
exports.resolveRole = function(roleId,guildId,client){
    
    let guild = client.guilds.cache.get(guildId)

    if(guild != undefined){
        let role = guild.roles.cache.get(roleId)
        return role
    }else{
        console.log("Role id undefined!")
    }
}

/**
 * 
 * @param {string} userId - The user id
 * @param {string} guildId - The guild id
 * @param {object} client - The client instance
 * @returns {Promise} - The user promise
 */
exports.resolveUser = function(userId,guildId,client){

    let guild = client.guilds.cache.get(guildId)

    if(guild != undefined){
        let user = guild.members.fetch(userId)
        return user
    }else{
        console.log("User id undefined!")
    }
}