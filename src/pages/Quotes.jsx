import React, { useContext, useMemo, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./Quotes.css";

const QUOTES = [
    {
        id: 1,
        text: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action.",
        ref: "Bhagavad Gita 2.47",
    },
    {
        id: 2,
        text: "The soul is neither born, and nor does it die; it is eternal, unborn, and everlasting.",
        ref: "Bhagavad Gita 2.20",
    },
    {
        id: 3,
        text: "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.",
        ref: "Bhagavad Gita 6.19",
    },
    {
        id: 4,
        text: "A person is made by their belief; as they believe, so they become.",
        ref: "Bhagavad Gita 17.3",
    },
    {
        id: 5,
        text: "The mind is both your best friend and your worst enemy when it is uncontrolled.",
        ref: "Bhagavad Gita 6.5–6",
    },
    {
        id: 6,
        text: "One who is equal in happiness and distress, fear and anxiety, is very dear to the Lord.",
        ref: "Bhagavad Gita 12.15",
    },
    {
        id: 7,
        text: "Whenever there is a decline in righteousness and a rise in unrighteousness, I manifest Myself.",
        ref: "Bhagavad Gita 4.7",
    },
    {
        id: 8,
        text: "By self-control and detachment, the wise soul attains peace.",
        ref: "Bhagavad Gita 2.71",
    },
    {
        id: 9,
        text: "He who sees inaction in action and action in inaction is wise among humans.",
        ref: "Bhagavad Gita 4.18",
    },
    {
        id: 10,
        text: "For one who has conquered the mind, it is the best of friends; for one who has failed, it is the greatest enemy.",
        ref: "Bhagavad Gita 6.6",
    },
];

const getRandomIndex = (length, exclude) => {
    if (length <= 1) return 0;
    let idx = Math.floor(Math.random() * length);
    while (idx === exclude) {
        idx = Math.floor(Math.random() * length);
    }
    return idx;
};

const Quotes = () => {
    const { theme } = useContext(ThemeContext);
    const quotes = useMemo(() => QUOTES, []);
    const [currentIndex, setCurrentIndex] = useState(
        () => Math.floor(Math.random() * quotes.length)
    );
    const [copied, setCopied] = useState(false);

    const currentQuote = quotes[currentIndex];

    const handleNext = () => {
        const nextIndex = getRandomIndex(quotes.length, currentIndex);
        setCurrentIndex(nextIndex);
        setCopied(false);
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(
                `"${currentQuote.text}" — ${currentQuote.ref}`
            );
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            // optional: you can show an alert or fallback here
            console.error("Clipboard copy failed", err);
        }
    };

    return (
        <div className={`quotes-page ${theme}`}>
            <h2 className="quotes-title">✨ Bhagavad Gita – Quotes</h2>

            <div className="quote-card">
                <div className="quote-label">Quote</div>
                <p className="quote-text">“{currentQuote.text}”</p>
                <p className="quote-ref">— {currentQuote.ref}</p>

                <div className="quote-actions">
                    <button
                        className={`btn copy-btn ${copied ? "copied" : ""}`}
                        onClick={handleCopy}
                    >
                        {copied ? "Copied ✓" : "Copy"}
                    </button>

                    <button className="btn next-btn" onClick={handleNext}>
                        Next quote →
                    </button>
                </div>
            </div>

            <p className="quote-hint">
                Tap “Next quote” to explore more wisdom from the Gita.
            </p>
        </div>
    );
};

export default Quotes;
