import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
    let [emojiOneFromCurrentRender, queueRerenderWithNewEmoji] = useState("⏰");
    let [emojiTwoFromCurrentRender, queueRerenderWithNewEmoji] = useState("🛌");

    const fryingPanSelected = () => {
        queueRerenderWithNewEmoji(emojiTwoFromCurrentRender = emojiOneFromCurrentRender)
        queueRerenderWithNewEmoji(emojiOneFromCurrentRender = "🍳")
    }
    const alarmClockSelected = () => {
        queueRerenderWithNewEmoji(emojiTwoFromCurrentRender = emojiOneFromCurrentRender)
        queueRerenderWithNewEmoji(emojiOneFromCurrentRender = "⏰")
    }
    const bedSelected = () => {
        queueRerenderWithNewEmoji(emojiTwoFromCurrentRender = emojiOneFromCurrentRender)
        queueRerenderWithNewEmoji(emojiOneFromCurrentRender = "🛌")
    }
    const yummyFaceSelected = () => {
        queueRerenderWithNewEmoji(emojiTwoFromCurrentRender = emojiOneFromCurrentRender)
        queueRerenderWithNewEmoji(emojiOneFromCurrentRender = "😋")
    }
    const dinnerPlateSelected = () => {
        queueRerenderWithNewEmoji(emojiTwoFromCurrentRender = emojiOneFromCurrentRender)
        queueRerenderWithNewEmoji(emojiOneFromCurrentRender = "🍽️")
    }

    return (
    <>
    <h3>Which emojis describe your mood right now?</h3>
    <p>Your current mood: {emojiOneFromCurrentRender}{emojiTwoFromCurrentRender}</p>
    <hr />
    <button onClick={fryingPanSelected}>🍳</button>
    <button onClick={fryingPanSelected}>⏰</button>
    <button onClick={fryingPanSelected}>🛌</button>
    <button onClick={fryingPanSelected}>😋</button>
    <button onClick={fryingPanSelected}>🍽️</button>
    </>
    )
}