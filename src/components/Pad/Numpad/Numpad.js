import React from 'react';
import Key from '../Key/Key';
import {Grid, Row} from 'react-bootstrap';
import './Numpad.css';

const numpad = (props) => {
    const digitToChar = [
        [' '],
        [',','.','!','?'],
        ['a','b','c'],
        ['d','e','f'],
        ['g','h','i'],
        ['j','k','l'],
        ['m','n','o'],
        ['p','q','r','s'],
        ['t','u','v'],
        ['w','x','y','z']
      ];
    return (
        <Grid className={'row numpad'} >
            <Row >
                <Key chars={digitToChar[1].join('')} clicked={props.fnc} number={1} />
                <Key chars={digitToChar[2].join('')} clicked={props.fnc} number={2} />
                <Key chars={digitToChar[3].join('')} clicked={props.fnc} number={3} />
            </Row>
            <Row >
                <Key chars={digitToChar[4].join('')} clicked={props.fnc} number={4} />
                <Key chars={digitToChar[5].join('')} clicked={props.fnc} number={5} />
                <Key chars={digitToChar[6].join('')} clicked={props.fnc} number={6} />
            </Row>
            <Row >
                <Key chars={digitToChar[7].join('')} clicked={props.fnc} number={7} />
                <Key chars={digitToChar[8].join('')} clicked={props.fnc} number={8} />
                <Key chars={digitToChar[9].join('')} clicked={props.fnc} number={9} />
            </Row>
            <Row >
                <Key chars={''} number={'*'} />
                <Key chars={'␣'} clicked={props.fnc} number={0} />
                <Key chars={''} number={'#'} />
            </Row>
        </Grid>
        );
}

export default numpad;