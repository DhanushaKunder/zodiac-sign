import "./styles.css";
import React, { useState } from "react";

const zodiacDictionary = {
  "♍": "Virgo",
  "♌": "Leo",
  "♋": "Cancer",
  "♏": "Scorpio",
  "♈": "Aries",
  "♉": "Taurus",
  "♊": "Gemini",
  "♑": "Capricorn",
  "♐": "Sagittarius",
  "♓": "Pisces",
  "♒": "Aquarius",
  "♎": "Libra"
};

const emojis = Object.keys(zodiacDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Meaning will appear here");

  function onChangeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);
    if (inputEmoji in zodiacDictionary) {
      setMeaning(zodiacDictionary[inputEmoji]);
    } else {
      setMeaning("This Zodiac sign is not in the dictionary!!");
    }
  }

  function emojiClickHandler(emoji) {
    setMeaning(zodiacDictionary[emoji]);
  }
  return (
    <div className="App">
      <h1 style={{ paddingTop: "7rem", paddingBottom: "1rem" }}>
        Zodiac Sign Meaning
      </h1>
      <input
        onChange={onChangeHandler}
        value={emoji}
        placeholder="Search your Zodia sign here"
        style={{
          margin: "0.5rem",
          padding: "1rem",
          borderRadius: "0.3rem",
          width: "15rem"
        }}
      />
      <h2> {emoji}</h2>
      <h2> {meaning} </h2>
      {emojis.map((emoji) => (
        <span
          // className="emojiDisplay"
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "3rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
