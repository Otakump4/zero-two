const colors = require('colors')

const color = (text, color) => {
    return !color ? colors.green(text) : colors.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? colors.green(text) : colors.bgKeyword(bgcolor)(text)
}

const logs = (text, color) => {
	return !color ? colors.red('[ BOT ] ') + colors.green(text) : colors.yellow('[ BOT ] ') + colors.keyword(color)(text)
}

module.exports = {
	color, bgcolor, logs
}
