import { useState } from 'react';

const useSpeechSynthesis = () => {
    const [speechSynthesisUtterance] = useState(new SpeechSynthesisUtterance());

    const speak = (text: string): void => {
        const messages = [
            "A long-sleeved plaid shirt with dark blue, black, and light blue stripes",
            "A long-sleeved blue plaid shirt with bold black and blue checkered pattern, with a button-down front and cuffs",
            "A cozy, classic blue plaid shirt exudes a casual, yet stylish vibe, perfect for a crisp autumn day.", 
            text
        ];

        const speakMessages = (index: number) => {
            if (index >= messages.length) {
                return;
            }

            speechSynthesisUtterance.text = messages[index];
            window.speechSynthesis.speak(speechSynthesisUtterance);

            speechSynthesisUtterance.onend = () => {
                setTimeout(() => {
                    speakMessages(index + 1);
                }, 2000);
            };
        };

        speakMessages(0);
    };

    const pause = () => {
        window.speechSynthesis.pause();
    };

    const resume = () => {
        window.speechSynthesis.resume();
    };

    const stop = () => {
        window.speechSynthesis.cancel();
    };
    return { speak, pause, resume, stop };
};

export default useSpeechSynthesis;
