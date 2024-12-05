//#ENJOY BRO😍
// Credit: JINHUYK|KangJinhuyk 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kangjinhuyk@yahoo.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/KangJinhuyk/JINHUYK-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/TAGPcMC.jpeg,https://files.catbox.moe/59iafh.jpg,https://files.catbox.moe/jynitk.jpg,https://files.catbox.moe/dohubs.jpg,https://files.catbox.moe/nm85c3.jpg";
global.devs = "https://wa.me/242067274660 , https://wa.me/243849962848";
global.sudo = process.env.SUDO || "242067274660";
global.owner = process.env.OWNER_NUMBER || "242069953931";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/xvYDAsD.jpeg,https://i.imgur.com/TAGPcMC.jpeg,https://endpoint.web.id/server/file/I8dkDXm1nJDtOI75.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://unknown-md-sessions-generator-1.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1BDNVJGU25wby8vMktqR0o1bFp3OG95TUJsaitNM3p1OW9id2hCTmczUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0pMVlNZSW5aVWhRS3Z0NTZ0Q3p2eU5xblVpMUFoOWlkanlYYWR6K0Z6UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBUEcyaHlaN0NyWm04QklyK2trWklrcGZtSFpObElkbHB3OHNYOUFyOUdJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxL3FuK0NBbmZlaURyYlY1a01OVWZvQWJNRWFnTXhSMk9lMzk5RGpvdUhVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFGRUVQWmczQ2d2YVRwQXExQVdXN3V6YjBzODFWL2V3VnF3RWtUZm1oVk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9hU2szR1NtUTNLeFRWVXNFeDhtS1JSVmtxVHJhYkUvR3hlYTlPazZydzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUZWelRQSVlsUWxtbGptT0hxczd4VjRuNW9McnFsREw2b3Fxc0h6WnVtND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVWZKMitkY1VoZWR6VkZQcFBiN1pBMC94cjhiVTd0dXVhbllwc0NQTG1FYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5PL255d3RYaDZNeXZ5bkt3cmFMek1HTFRMRWRWcTdvT3FxbEtpNzRvSDRGdmlIblFwaFlQY3RlSmUzQ3pnN0NaWU9jQzk4aWZmQkhxcFZ0eE5naGlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjgsImFkdlNlY3JldEtleSI6InRTNlY3UG5najE1MEdRVGg5YUhMeVBwTjFoM1h4TzU5eTFaaTlEZDh6LzQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjQyMDY5OTUzOTMxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNDRjc1NDVGMDY3NkM1QTUxMUJGRUFGODQ2Qzg5NDdBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzM0NDE3OTh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI0MjA2OTk1MzkzMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQkNDMTZBOUMzQTc5MjQ4MUY4MDdBOUY5NjdBRDU1NSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMzNDQxNzk5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJMU2VTNldkdFRIMldzaTRTVHZEMVZnIiwicGhvbmVJZCI6ImNmZjdiN2FmLWRiNWYtNGI3ZS05ZWFkLTM1ZTY5MzBlNjJjOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3MXkxNVIvS3hvZ1NZTDJ0bXRwQ0txSng4Qkk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXhVa3hFZEdmVkVIazBWa3QvQ0JoRzFQY0ZVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkU3MUxaTEdFIiwibWUiOnsiaWQiOiIyNDIwNjk5NTM5MzE6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZG18J2SgvCdkpDwnZKH8J2SlvCdko7wnZKKLfCdkpTwnZKC8J2SjvCdkoIg8J2RhvCdkYjwnZuy8J2bsvCdm6nwnZGF8J2RhyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUEtneXE0QkVQYnh5TG9HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoid3JxT083Qzg5THQ3bVVlRDMrdWxlZ05VeTFhRnM1Vk44MkhnVWVpd1EwTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaUN4dEZwZVU1aU1jR043aVhQWWhMdzlYVHZCRTF5dCs1TDFlZjU3WUU3VmNmcGl0SGlxbmdwYXNyRHFiZ05sTDVXZVMrWXY2ZjBodmpGOUtEQXB0Q1E9PSIsImRldmljZVNpZ25hdHVyZSI6IkFYZ2g0R0UwL29Td3R3bFFKblpyeG9yVzF1bklGMFhiQ09xOU9ZZ0svb21HK1VmZ3pDOEFwSXNwUVV2djdBVXFaaklDclNPa1FiNU9XS1RGRUI3bmhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjQyMDY5OTUzOTMxOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY0s2amp1d3ZQUzdlNWxIZzkvcnBYb0RWTXRXaGJPVlRmTmg0Rkhvc0VORCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzQ0MTc5NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQUTIifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝐉𝚰𝚴𝚮𝐘𝐔𝐊`",
  author: process.env.PACK_AUTHER || "𝐉𝚰𝚴𝚮𝐘𝐔𝐊",
  packname: process.env.PACK_NAME || "𝐉𝐈𝐍𝐇𝐘𝐔𝐊-𝐌𝐃",
  botname: process.env.BOT_NAME || "𝐉𝚰𝚴𝚮𝐘𝐔𝐊-𝚳𝐃",
  ownername: process.env.OWNER_NAME || "𝑃𝒂𝒚𝒆𝒓 𝑈𝒏𝒌𝒏𝒐𝒘𝒏",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "JINHUYK").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
