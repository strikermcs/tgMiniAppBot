const { Telegraf, Markup } = require('telegraf');

require('dotenv').config()

const token = process.env.TELEGRAM_BOT_TOKEN
const webAppUrl = process.env.TELEGRAM_MINI_APP_URL

console.log(`Init bot`)

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    console.log("Bot started")
    ctx.reply(
        'Hello! Press to start the game',
        Markup.inlineKeyboard([
            Markup.button.webApp('Open Tap Hero Wars', `${webAppUrl}?ref=${ctx.payload}`)
        ])
    )
})

bot.launch()