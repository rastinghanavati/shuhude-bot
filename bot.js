const mineflayer = require("mineflayer");

const bot = mineflayer.createBot({
  host: "shuhude.aternos.me", // ❗ آدرس سرور Aternos رو اینجا بذار
  port: 64255, // پورت پیش‌فرض
  username: "shuhudeBot", // اسم اکانت کرک شده
  auth: "offline", // برای TLauncher و اکانت‌های کرک شده
  uuid: "5569D97E-4629-30D0-8A78-977F4F929FF5" // UUID کرک شده تو
});

// جلوگیری از کیک شدن به خاطر AFK
setInterval(() => {
  if (bot.entity) {
    bot.setControlState("jump", true);
    setTimeout(() => bot.setControlState("jump", false), 500);
  }
}, 240000); // هر 4 دقیقه می‌پره

bot.on("kicked", (reason) => console.log(`Kicked: ${reason}`));
bot.on("error", (err) => console.log(`Error: ${err}`));
