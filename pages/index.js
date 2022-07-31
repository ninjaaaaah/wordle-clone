import Head from 'next/head';

import React, { useEffect, useState } from 'react';
import './_app.js';
import Keyboard from '../components/Keyboard';
import Board from '../components/Board';
import End from '../components/End';

const dictionary = require('./dictionary.json');

var tries = Array(6).fill('');

export default function Wordle() {
  const [activeKey, setActiveKey] = useState('');
  const [text, setText] = useState('');
  const [activeRow, setActiveRow] = useState(0);
  const [game, setGame] = useState(0);
  const [word, setWord] = useState('');

  const generateWord = () => {
    let randWord =
      Object.keys(dictionary)[
        Math.floor(Math.random() * Object.keys(dictionary).length)
      ];
    console.log(randWord);
    return randWord;
  };

  useEffect(() => {
    setWord(generateWord());
  }, []);

  const handleKeyDown = (event) => {
    !game
      ? isAlpha(event.key) && text.length < 5
        ? (setActiveKey(event.key), setText(text + event.key))
        : event.code == 'Backspace'
        ? (setActiveKey(event.code), setText(text.slice(0, -1)))
        : event.code == 'Enter'
        ? (setActiveKey(event.code), validate())
        : {}
      : event.code == 'Enter'
      ? reset()
      : {};
  };

  const handleKeyUp = () => {
    activeKey != 'Enter'
      ? setActiveKey('')
      : setTimeout(() => {
          setActiveKey('');
        }, 500 * 5);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [text, game, activeRow, word]);

  const isAlpha = (ch) => {
    return /^[A-Z]$/i.test(ch) | (ch === '');
  };

  const reset = () => {
    tries = ['', '', '', '', '', ''];
    setText('');
    setGame(0);
    setActiveRow(0);
    setWord(generateWord());
    console.log(text, game, activeRow, word, tries);
  };

  const validate = () => {
    text.length === 5 && Object.keys(dictionary).includes(text)
      ? ((tries[activeRow] = text),
        text === word
          ? (setActiveRow(activeRow + 1), setGame(1))
          : setActiveRow(activeRow + 1),
        activeRow === 6 ? setGame(1) : {},
        setText(''))
      : {};
  };

  return (
    <div className="container">
      <Head>
        <title>Wordle - Guess the word in 6 tries!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <span className="code">{word.toUpperCase()}</span>
      <Board activeRow={activeRow} text={text} tries={tries} word={word} />
      <Keyboard activeKey={activeKey} validate={validate} />
      <End end={game} win={game && activeRow < 7} reset={reset} />
    </div>
  );
}
