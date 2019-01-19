import React from 'react';
import {Col, Glyphicon} from 'react-bootstrap';
import './Key.css';

const key = (props) => {
    const keyContent = (props.glyph) ? <Glyphicon glyph={props.glyph} /> :
        (<> 
            <span className={'chars'} >{props.chars}</span>
            <span className={'number'}>{props.number}</span>
        </>);
        const keyClasses = `key ${props.chars ? "" : "no-chars"}`;
    return (
        <Col xs={4} className={keyClasses}
        onClick={() => props.clicked(props.number)} >
            {keyContent}
        </Col>
        );
}

export default key;