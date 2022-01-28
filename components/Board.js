import { motion } from 'framer-motion';

function Tile(props) {
    return (
        <div
            className="tile"
            style={{ '--index': props.index }}
            id={
                props.activeRow == props.row && props.text.length > props.index
                    ? 'active'
                    : props.activeRow > props.row
                    ? props.try[props.index] == props.word[props.index]
                        ? 'green'
                        : props.word.includes(props.try[props.index])
                        ? 'yellow'
                        : 'gray'
                    : {}
            }
        >
            {props.activeRow == props.row
                ? props.text[props.index]
                : props.try
                ? props.try[props.index]
                : ''}
        </div>
    );
}

function Row(props) {
    return (
        <div className="row">
            {Array(5)
                .fill(null)
                .map((_, index) => (
                    <Tile
                        key={index}
                        row={props.index}
                        index={index}
                        activeRow={props.activeRow}
                        text={props.text}
                        try={props.tries[props.index]}
                        word={props.word}
                    />
                ))}
            {props.current}
        </div>
    );
}

export default function Board(props) {
    return (
        <motion.div
            className="board"
            animate={{ scale: [0, 1.1, 1] }}
            transition={{
                duration: 0.3,
                ease: 'easeOut',
                times: [0, 0.8, 1],
            }}
            initial={{ scale: 0 }}
        >
            {Array(6)
                .fill(null)
                .map((_, index) => (
                    <Row
                        key={index}
                        index={index}
                        activeRow={props.activeRow}
                        text={props.text}
                        tries={props.tries}
                        word={props.word}
                    />
                ))}
        </motion.div>
    );
}
