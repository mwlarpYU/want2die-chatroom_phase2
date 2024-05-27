document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat-box");
    const messages = [
		{ type: "system", text: "NPC2 加入群組" },
		{ type: "other", text: "NPC2：大家好！" },
		{ type: "other", text: "NPC2：請多指教！" },
		{ type: "user", text: "歡迎加入" },
		{ type: "other", text: "NPC3：歡迎歡迎" },
		{ type: "other", text: "NPC4：歡迎新人~~" },
		{ type: "system", text: "Nobody 退出群組" },
		{ type: "system", text: "NPC6 加入群組" },
		{ type: "other", text: "NPC5：大家好啊！" },
		{ type: "other", text: "NPC5：今天的話題好深刻啊" },
		{ type: "user", text: "是啊，我們來討論人生哲理和生死觀吧" },
		{ type: "other", text: "NPC2：人生哲理啊，這可是一個無盡的話題" },
		{ type: "other", text: "NPC3：對啊，每個人都有自己的想法和體悟" },
		{ type: "other", text: "NPC4：我覺得人生就像一場旅程，充滿了挑戰和奇遇" },
		{ type: "other", text: "NPC5：但我們又不知道這場旅程的終點在哪裡" },
		{ type: "other", text: "NPC6：或許正因為不知道終點，我們才更應該珍惜每一刻" },
		{ type: "user", text: "沒錯，所以我們應該活在當下，好好珍惜眼前的一切" },
		{ type: "other", text: "NPC2：生死也是一個深刻的議題，對吧" },
		{ type: "other", text: "NPC3：有人認為死亡是終結，但也有人認為是另一個開始" },
		{ type: "other", text: "NPC4：我相信靈魂是永恆的，只是身體的消亡而已" },
		{ type: "other", text: "NPC5：那你們相信有來世嗎？" },
		{ type: "user", text: "我個人覺得這是一個神秘的問題，每個人都有不同的信仰" },
		{ type: "other", text: "NPC6：無論如何，我們都應該勇敢面對生命的每一個階段" },
		{ type: "other", text: "NPC2：就像一場冒險，不是嗎？" },
		{ type: "other", text: "NPC3：對啊，人生就是一場精彩的冒險" },
		{ type: "other", text: "NPC4：我們應該懷著感恩的心，活出自己想要的生活" },
		{ type: "user", text: "謝謝大家，這次的討論很有意義，讓我們更加珍惜眼前的一切" },
		{ type: "other", text: "NPC5：期待下次的討論，大家晚安！" },
		{ type: "other", text: "NPC2：" },
        { type: "other", image: "https://stickershop.line-scdn.net/stickershop/v1/product/7028/LINEStorePC/main.png" }, // 圖片訊息
        { type: "user", voice: "https://od.lk/s/OTlfNDc4MTcxODVf/HBD_JAZZ.mp3" }    // 語音訊息
    ];

    let index = 0;

    function displayNextMessage() {
        if (index < messages.length) {
            const messageElement = document.createElement("div");
            messageElement.classList.add("message");
            messageElement.classList.add(messages[index].type);
            
            if (messages[index].text) {
                messageElement.textContent = messages[index].text;
            } else if (messages[index].image) {
                const imageElement = document.createElement("img");
                imageElement.src = messages[index].image;
                imageElement.classList.add("chat-image");
                messageElement.appendChild(imageElement);
            } else if (messages[index].voice) {
                const audioElement = document.createElement("audio");
                audioElement.src = messages[index].voice;
                audioElement.controls = true;
                audioElement.classList.add("chat-voice");
                messageElement.appendChild(audioElement);
            }
            
            chatBox.appendChild(messageElement);
            chatBox.scrollTop = chatBox.scrollHeight;  // 自動滾動到最新訊息
            index++;

            // 計算下一條訊息的顯示時間，1到3秒之間隨機
            const nextInterval = Math.random() * (3000 - 1000) + 1000;
            setTimeout(displayNextMessage, nextInterval);
        }
    }

    displayNextMessage();
});
