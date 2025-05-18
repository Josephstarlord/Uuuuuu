const axios = require("axios");

module.exports = {
    name: "ai",
    usePrefix: false,
    usage: "ai <your question>",
    version: "1.2",
    admin: false,
    cooldown: 2,

    execute: async ({ api, event, args }) => {
        try {
            const { threadID } = event;
            const prompt = args.join(" ");
            
            if (!prompt) {
                return api.sendMessage("Veuillez poser une question.", threadID);
            }

            const loadingMsg = await api.sendMessage("🔵⚪🔴.... ", threadID);
            const apiUrl = `https://sandipbaruwal.onrender.com/gemini?prompt=${encodeURIComponent(prompt)}`;
            const response = await axios.get(apiUrl);

            // Gestion des deux formats de réponse
            const answer = response?.answer;
            const description = typeof answer === 'string' ? answer : answer?.description;

            if (description) {
                return api.sendMessage(`${description} 🪐`, threadID, loadingMsg.messageID);
            }

            return api.sendMessage("⚠️ Aucune réponse valide reçue de l'API.", threadID, loadingMsg.messageID);
        } catch (error) {
            console.error("❌ Erreur Gemini:", error);
            return api.sendMessage("❌ Erreur lors de la connexion à l'API Gemini.", event.threadID);
        }
    }
};
