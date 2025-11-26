// src/pages/About.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./About.css";

const SOCIAL_LINKS = [
    {
        name: "Instagram",
        url: "https://instagram.com/athuchandole",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Instagram"
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="22"
                height="22"
            >
                <path d="M7.75 2c-2.4 0-4.35 1.95-4.35 4.35v10.3c0 2.4 1.95 4.35 4.35 4.35h8.5c2.4 0 4.35-1.95 4.35-4.35V6.35c0-2.4-1.95-4.35-4.35-4.35h-8.5zm0 1.5h8.5c1.57 0 2.85 1.28 2.85 2.85v10.3c0 1.57-1.28 2.85-2.85 2.85h-8.5c-1.57 0-2.85-1.28-2.85-2.85V6.35c0-1.57 1.28-2.85 2.85-2.85zm8.25 2.65a1.1 1.1 0 1 1-2.196-.006 1.1 1.1 0 0 1 2.196.006zm-4.25 1.35a4.85 4.85 0 1 0 0 9.7 4.85 4.85 0 0 0 0-9.7zm0 1.5a3.35 3.35 0 1 1 0 6.7 3.35 3.35 0 0 1 0-6.7z" />
            </svg>
        ),
    },
    {
        name: "Twitter",
        url: "https://twitter.com/athuchandole",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Twitter"
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="22"
                height="22"
            >
                <path d="M23 3a10.9 10.9 0 0 1-3.14.86 4.48 4.48 0 0 0 1.94-2.48 9.25 9.25 0 0 1-2.92 1.12A4.52 4.52 0 0 0 16 2a4.48 4.48 0 0 0-4.47 4.46c0 .35.04.7.11 1.03A12.83 12.83 0 0 1 3.15 3.8a4.8 4.8 0 0 0-.61 2.25A4.49 4.49 0 0 0 5.6 10.3a4.49 4.49 0 0 1-2.03-.56v.06a4.47 4.47 0 0 0 3.6 4.4 4.52 4.52 0 0 1-2.03.07 4.48 4.48 0 0 0 4.18 3.11A9 9 0 0 1 2 18.57a12.82 12.82 0 0 0 6.95 2.04c8.34 0 12.91-6.9 12.91-12.88l-.01-.59A9.22 9.22 0 0 0 23 3z" />
            </svg>
        ),
    },
];

const About = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`about-page ${theme}`}>
            <h2>About Bhagavad Gita Web</h2>

            <section>
                <h3>About This Site</h3>
                <p>
                    This site provides comprehensive information and quotes from the{" "}
                    <strong>Bhagavad Gita</strong>, powered by the{" "}
                    <a
                        href="https://rapidapi.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Getital Bhagavad Gita API at Rapid API
                    </a>
                    . Our goal is to make this timeless spiritual scripture easily
                    accessible and readable for everyone.
                </p>
            </section>

            <section>
                <h3>Developer</h3>
                <p>
                    Developed by <strong>Atharv Chandole</strong> (username{" "}
                    <code>@athuchandole</code>).
                </p>
                <p>
                    Visit portfolio:{" "}
                    <a
                        href="https://athuchandole.github.io/portfolio/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://athuchandole.github.io/portfolio/
                    </a>
                </p>

                <div className="social-links">
                    {SOCIAL_LINKS.map(({ name, url, icon }) => (
                        <a
                            key={name}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={name}
                            className="social-btn"
                            title={name}
                        >
                            {icon}
                        </a>
                    ))}
                </div>
            </section>
        </div >
    );
};

export default About;
