import React from 'react';
import './animatedletters.scss';

function AnimatedLetters( { letterClass, strArray, idx } ) {//idx set the delay of animatingthe letter
    return (
        <span>
            {strArray.map((char, i) => (
                <span key={char + i} className={`${letterClass} _${i + idx}`}>
                {char}
                </span>
            ))}
        </span>
    )
}

export default AnimatedLetters
