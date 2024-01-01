const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94713466375'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94713466375"
global.devs = '94713466375';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "L3gzMzdsZkVTU0RoMFhmUVlnbUJITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREFWMTZ0clM2YUFqaGJBcW01SlN1cjJHeHRGTjZTTVpKZ3I1TTRndXFucz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSlQrNUc2NWt5cVp0TzAzbi9URThhVVhwVDVQVEVFdVhndTZieXczQ1hRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUODJ3eGZvWmc0NWJSUDhiT1NDb1d1d2dET2lSR20vZWo5MVpRK3F3SmljPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFLcDFrakhoa1Yzc2hqWXRyV0YwRnVHZzhkWUVPR0d5VVpkSFVvak9qWHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVQYnhJdUpOdWFmNmxPbzZtZ3JBaEgzd0FGVG9VZVZyc0JRVDl6T2I5bms9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSK0p2MlhFdFRZSVNUOXRnKzlQRHEzVzJtS0J4M0cxR0lMVkl1amY4ZmZtRHFWTEpNbk1KWEhKbnlIVU9NUWRSc085cHVOUnRELzlSZU5HRDNaYzZqUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEwOSwiYWR2U2VjcmV0S2V5Ijoia0pIN3RueGtHVlpNVEpEdjJEeWk1aDZ1UUpVa0NnMWJ4U3N5MEFIL3F4RT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiQkQ4NEFRbkxRaU9yTnNBekczd0JaUSIsInBob25lSWQiOiIwOGIyZmMzZi0wZDYxLTRlODMtOTdiNi0yOTE4MjJhNjNiMzAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHBuaUdFNS9JK0YxVFdPRnFPQnliOVZEdTc0PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4NlBReDVoNnFGZzlQZjZpZ3p1Sy8vOFAwOUU9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNObitwcHdHRU9mN3lLd0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJlQ05QRS9kWGNuazVtcnpoM2w4VnB1bU1ORTJpbDk0Mnp5eHZoaGNIcHlRPSIsImFjY291bnRTaWduYXR1cmUiOiJvSkhmY25NcVYvNndlOVU2U0phcTdKUnpYV0tVZlhCVjZ3UzcvMHNORGI4eFNiK3YvMWh4UXVPY1pUZmFhc2hqRmwxWDFkWGFLZGJaclJwSVplYUpBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidmlYQmpLbVJDZ0dQbmdYeUphVXlkelEzc0xBSEZ5T3VRUlJaWEpWb1Y1MEtPdTZLQy9zUVdvZDdHS0ZXc3ZPSVg4b2owUkFxcFl3TnNSM1l6S3l0amc9PSJ9LCJtZSI6eyJpZCI6Ijk0NzEzNDY2Mzc1OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4Z+a4L",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'SITHUWA BOT',
  packname:  process.env.PACK_NAME || 'MADE BY SITHUM KALHARA',
  
  botname:   process.env.BOT_NAME === undefined ? "SITHUWA-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'sithumkalhara' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
