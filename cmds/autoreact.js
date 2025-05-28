module.exports = {
    name: "autoreact",
    usePrefix: true,
    version: "1.0",
    author: "aesther",
    description: "Réagit automatiquement aux messages avec des emojis",
    admin: false,
    cooldown: 0,

    execute: async ({ api, event }) => {
        const availableEmojis = ['😘', '🥺', '😀', '😾', '😛', '😽', '😸', '♥️', '😋', '✨', 
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
            '👒', '🎩', '🎓', '🧢', '🪖', '⛑️', '💄', '💍', '💼', '🩴' ];
        const messageEmojis = ['😘', '🥺', '😀', '😾', '😛', '😽', '😸', '♥️', '😋', '✨', 
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
            '👒', '🎩', '🎓', '🧢', '🪖', '⛑️', '💄', '💍', '💼', '🩴']; // Les mêmes que availableEmojis pour la réaction aux emojis du message
        
        try {
            const messageContent = event.body || '';
            
            // Vérifier si le message contient un des emojis spécifiques
            const foundEmoji = messageEmojis.find(emoji => messageContent.includes(emoji));
            
            let reactionEmoji;
            
            if (foundEmoji) {
                // Réagir avec le même emoji que celui trouvé dans le message
                reactionEmoji = foundEmoji;
            } else {
                // Choisir un emoji aléatoire parmi la liste
                reactionEmoji = availableEmojis[Math.floor(Math.random() * availableEmojis.length)];
            }
            
            // Ajouter la réaction
            await api.setMessageReaction(reactionEmoji, event.messageID, () => {}, true);
            
        } catch (error) {
            console.error("Erreur dans autoreact:", error);
        }
    }
};
        
