import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalTypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
}

const TerminalTypewriter = ({ text, delay = 0, speed = 50 }: TerminalTypewriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started || currentIndex >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, started, speed]);

  return (
    <div className="flex items-center">
      <span className="text-lg md:text-xl">{displayText}</span>
      {started && currentIndex < text.length && (
        <motion.span
          className="inline-block w-2 h-5 bg-green-400 ml-1"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      )}
    </div>
  );
};

export default TerminalTypewriter;