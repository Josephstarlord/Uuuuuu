module.exports = {
    name: "autoreact",

    async execute({ api, event }) {
        const possibleReactions = ['😘', '🥺', '😀', '😾', '😛', '😽', '😸', '♥️', '😋', '✨', 
            '❄️', '👅', '😒', '😊', '💚', '🚀', '🤪', '😙', '🥴', '🤐', 
            '🙁', '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', 
            '🙃', '😉', '😊', '😇', '🥰', '😍', '🤩', '😘', '😗', '☺️', 
            '😚', '😙', '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', 
            '🤫', '🤔', '🤐', '🤨', '😐', '😑', '🤹', '🎭', '🩰', '🎨', 
            '🎬', '🎤', '🎧', '🎼', '🎹', '🥁', '🪘', '🎷', '🎺', '🎸', 
            '🪕', '🎻', '🎲', '♟️', '🎯', '🎳', '🎮', '🎰', '🧩', '🧸', 
            '🪅', '🪆', '♠️', '♥️', '♦️', '♣️', '🃏', '🀄', '🎴', '🎭', 
            '🖼️', '🎨', '🧵', '🧶', '🪡', '🪢', '👓', '🕶️', '🥽', '🥼', 
            '🦺', '👔', '👕', '👖', '🧣', '🧤', '🧥', '🧦', '👗', '👘', 
            '🥻', '🩱', '🩲', '🩳', '👙', '👚', '👛', '👜', '👝', '🛍️', 
            '🎒', '👞', '👟', '🥾', '🥿', '👠', '👡', '🩰', '👢', '👑', 
            '👒', '🎩', '🎓', '🧢', '🪖', '⛑️', '💄', '💍', '💼', '🩴'];
        const reactionProbability = 0.5; // 50% de chance de réagir

        try {
            if (event.type === "message" && event.senderID !== api.getCurrentUserID()) {
                // Décider aléatoirement si on réagit ou non
                if (Math.random() < reactionProbability) {
                    const randomReaction = possibleReactions[Math.floor(Math.random() * possibleReactions.length)];
                    await api.setMessageReaction(randomReaction, event.messageID, (err) => {
                        if (err) console.error("❌ Erreur de réaction:", err);
                    });
                }
            }
        } catch (err) {
            console.error("❌ Erreur dans randomreact:", err);
        }
    }
};
