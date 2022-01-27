function Tile(props) {
    return (
        <div
            className="tile"
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

function Board(props) {
    return (
        <div className="board">
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
        </div>
    );
}

export default Board;
