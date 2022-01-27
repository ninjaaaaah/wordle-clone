import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Board from './Board';
const dictionary = require('../dictionary.json');

const first = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
const second = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
const third = ['ENTER', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '⌫'];
const tries = ['', '', '', '', '', ''];

function Tile(props) {
    return (
        <motion.div
            className="key"
            id={props.activeKey === props.text ? 'active' : ''}
        >
            {props.text}
        </motion.div>
    );
}

function Row(props) {
    return (
        <div className="row">
            {props.row === 0
                ? first.map((letter) => (
                      <Tile
                          text={letter}
                          key={letter}
                          activeKey={props.activeKey}
                      />
                  ))
                : props.row === 1
                ? second.map((letter) => (
                      <Tile
                          text={letter}
                          key={letter}
                          activeKey={props.activeKey}
                      />
                  ))
                : third.map((letter) => (
                      <Tile
                          text={letter}
                          key={letter}
                          activeKey={props.activeKey}
                      />
                  ))}
        </div>
    );
}

var word = '';

function Keyboard() {
    const [activeKey, setActiveKey] = useState('');
    const [text, setText] = useState('');
    const [activeRow, setActiveRow] = useState(0);
    const [game, setGame] = useState(0);

    useEffect(() => {
        word =
            Object.keys(dictionary)[
                Math.floor(Math.random() * Object.keys(dictionary).length)
            ];
        console.log(word);
    }, []);

    const isAlpha = (ch) => {
        return /^[A-Z]$/i.test(ch) | (ch === '');
    };

    const validate = () => {
        text.length === 5
            ? ((tries[activeRow] = text),
              text === word
                  ? (setActiveRow(activeRow + 1), setGame(1))
                  : setActiveRow(activeRow + 1),
              setText(''))
            : {};
    };

    const handler = (event) => {
        !game
            ? (isAlpha(event.key) && text.length < 5
                  ? (setActiveKey(event.key), setText(text + event.key))
                  : {},
              event.keyCode === 8 ? setText(text.slice(0, -1)) : {},
              event.keyCode === 13 ? validate() : {})
            : {};
    };

    const reset = () => {
        setActiveKey('');
    };

    return (
        <>
            <Board
                activeRow={activeRow}
                text={text}
                tries={tries}
                word={word}
            />
            <div
                className="keyboard"
                tabIndex="0"
                onKeyDown={(e) => handler(e)}
                onKeyUp={reset}
            >
                {Array(3)
                    .fill(null)
                    .map((_, index) => (
                        <Row key={index} row={index} activeKey={activeKey} />
                    ))}
            </div>
        </>
    );
}

export default Keyboard;
