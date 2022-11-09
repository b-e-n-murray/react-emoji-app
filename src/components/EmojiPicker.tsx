import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [emojiListCurrentRender, queueRerenderWithNewEmojiList] = useState<
    string[]
  >([]);

  const fryingPanSelected = () => {
    if (emojiListCurrentRender.length <= 4) {
      queueRerenderWithNewEmojiList([...emojiListCurrentRender, "🍳"]);
    } else <p>"You can't have more than five emojis!"</p>;
  };
  const alarmClockSelected = () => {
    if (emojiListCurrentRender.length <= 4) {
      queueRerenderWithNewEmojiList([...emojiListCurrentRender, "⏰"]);
    } else <p>"You can't have more than five emojis!"</p>;
  };
  const bedSelected = () => {
    if (emojiListCurrentRender.length <= 4) {
      queueRerenderWithNewEmojiList([...emojiListCurrentRender, "🛌"]);
    } else <p>"You can't have more than five emojis!"</p>;
  };
  const yummyFaceSelected = () => {
    if (emojiListCurrentRender.length <= 4) {
      queueRerenderWithNewEmojiList([...emojiListCurrentRender, "😋"]);
    } else <p>"You can't have more than five emojis!"</p>;
  };
  const dinnerPlateSelected = () => {
    if (emojiListCurrentRender.length <= 4) {
      queueRerenderWithNewEmojiList([...emojiListCurrentRender, "🍽️"]);
    } else <p>"You can't have more than five emojis!"</p>;
  };

  return (
    <>
      <h3>Which emojis describe your mood right now?</h3>
      <p>
        Your current mood:
        {emojiListCurrentRender.map((emoji, i) => {
          return <li key={i}>{emoji}</li>;
        })}
      </p>
      <hr />
      <button onClick={fryingPanSelected}>🍳</button>
      <button onClick={alarmClockSelected}>⏰</button>
      <button onClick={bedSelected}>🛌</button>
      <button onClick={yummyFaceSelected}>😋</button>
      <button onClick={dinnerPlateSelected}>🍽️</button>
    </>
  );
}
