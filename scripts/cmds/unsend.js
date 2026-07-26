module.exports = {
	config: {
		name: "unsend",
		aliases: ["u", "uns", "del"],
		version: "2.0.0",
		author: "Shishir: 3,
		role: 0,
		description: { en: "ᴜɴꜱᴇɴᴅ ʙᴏᴛ ᴍᴇꜱꜱᴀɢᴇ" },
		category: "utility",
		guide: { en: "ʀᴇᴘʟʏ ᴛᴇ ʙᴏᴛcountDown: 3,
		role: 0,
		description: { en: "ᴜɴꜱᴇɴᴅ ʙᴏᴛ ᴍᴇꜱꜱᴀɢᴇ" },
		category: "utility",
		guide: { en: "ʀᴇᴘʟʏ ᴛᴇ ʙᴏᴛ ᴍᴇtDown: 3,
		role: 0,
		description: { en: "ᴜɴꜱᴇɴᴅ ʙᴏᴛ ᴍᴇꜱꜱᴀɢᴇ" },
		category: "utility",
		guide: { en",
		ʜᴇ ʙᴏᴛ ᴍᴇꜱꜱᴀɢᴇ ᴀɴᴅ ᴄᴀʟʟ {pn}" }
	},

	langs: {
		en: {
			syntaxError: "⌀ ʀᴇᴘʟʏ ᴛʜᴇ ʙᴏᴛ ᴍᴇꜱꜱᴀɢᴇ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ʀᴇᴍᴏᴠᴇ",
			noPerms:     "⌀ ᴛʜᴀᴛ ᴍᴇꜱꜱᴀɢᴇ ᴡᴀꜱ ɴᴏᴛ ꜱᴇɴᴛ ʙʏ ᴛʜᴇ ʙᴏᴛ"
		}
	},

	onStart: async function ({ message, event, api, gountDown: 3,
		role: 0,
		description: { en: "ᴜɴꜱᴇɴᴅ ʙᴏᴛ ᴍᴇꜱꜱᴀɢᴇ" },
		category: "utility",
		guide: { en: "ʀᴇᴘʟʏ ᴛʜᴇ ʙᴏᴛ ᴍᴇꜱꜱᴀɢᴇ ᴀɴᴅ ᴄᴀʟʟ {pn}" }
	},

	langs: {
		en: {
			syntaxError: "⌀ ʀᴇᴘʟʏ ᴛʜᴇ ʙᴏᴛ ᴍᴇꜱꜱᴀɢᴇ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ʀᴇᴍᴏᴠᴇ",
			noPerms:     "⌀ ᴛʜᴀᴛ ᴍᴇꜱꜱᴀɢᴇ ᴡᴀꜱ ɴᴏᴛ ꜱᴇɴᴛ ʙʏ ᴛʜᴇ ʙᴏᴛ"
		}
	},

	onStart: async function ({ message, event, api, getLang, role }) {
		if (!event.messageReply) return message.reply(getLang("syntaxError"));
		const botID = api.getCurrentUserID();
		const isBotMsg = event.messageReply.senderID === botID;
		if (!isBotMsg && role < 2) return message.reply(getLang("noPerms"));
		message.unsend(event.messageReply.messageID);
	}
};
