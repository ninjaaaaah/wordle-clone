import { motion } from 'framer-motion';

const first = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
const second = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
const third = ['ENTER', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '⌫'];

function Tile(props) {
  return (
    <motion.div
      className="key"
      id={
        props.activeKey.toLowerCase() === props.code.toLowerCase()
          ? 'active'
          : ''
      }
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
              code={letter}
              text={letter}
              key={letter}
              activeKey={props.activeKey}
            />
          ))
        : props.row === 1
        ? second.map((letter) => (
            <Tile
              code={letter}
              text={letter}
              key={letter}
              activeKey={props.activeKey}
            />
          ))
        : third.map((letter) => (
            <Tile
              code={letter != '⌫' ? letter : 'Backspace'}
              text={letter}
              key={letter}
              activeKey={props.activeKey}
            />
          ))}
    </div>
  );
}

function Keyboard(props) {
  return (
    <>
      <div className="keyboard">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <Row key={index} row={index} activeKey={props.activeKey} />
          ))}
      </div>
    </>
  );
}

export default Keyboard;
