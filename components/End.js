import { motion } from 'framer-motion';

const curve = {
    type: 'spring',
    stiffness: 400,
    damping: 30,
};

const menu = {
    hidden: {
        opacity: 0,
        scale: 0,
        display: 'hidden',
    },
    visible: {
        opacity: 1,
        scale: 1,
        display: 'visible',
        transition: { ...curve, delay: 0.5 * 5 },
    },
};

const screens = {
    top: {
        zIndex: 2,
        transition: { delay: 0.5 * 5 },
    },
    bottom: {
        zIndex: -1,
    },
};

function End(prop) {
    return (
        <motion.div
            className="endscreen"
            animate={prop.end ? 'top' : 'bottom'}
            variants={screens}
        >
            <motion.div
                variants={menu}
                animate={prop.end ? 'visible' : 'hidden'}
                className="end"
            >
                <h1>{prop.win ? 'You Win!' : 'You Lose!'}</h1>
                <button className="reset" onClick={prop.reset}>
                    PLAY AGAIN
                </button>
            </motion.div>
        </motion.div>
    );
}

export default End;
