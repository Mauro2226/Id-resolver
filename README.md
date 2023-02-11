# ID RESOLVER 

### This is a simple id resolver package for **discord.js**.
 You can install this package with:
 ```
 npm i id_resolver
 ```
>Below are some code examples using this package:
- For channel resolve:
```js
 const client = new discord.Client()
 const id_resolver = require('id_resolver')

 let channel_id = "1234"
 let guild_id = "5678"

 let channel = id_resolver.resolveChannel(channel_id,guild_id,client)
 console.log(channel)
 ```
 - For role resolve:
 ```js
 const client = new discord.Client()
 const id_resolver = require('id_resolver')

 let role_id = "1234"
 let guild_id = "5678"

 let role = id_resolver.resolveRole(role_id,guild_id,client)
 console.log(role)
 ```
 - For user resolve:
 ```js
 const client = new discord.Client()
 const id_resolver = require('id_resolver')

 let user_id = "1234"
 let guild_id = "5678"

 id_resolver.resolveUser(user_id,guild_id,client).then((user) => {
    console.log(user)
 }).catch((err) => {
    console.log(err)
 })
 ```
# For any problem you can contact me on [discord](htts://discord.com/): Maurizio#0268.