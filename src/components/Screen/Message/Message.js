import React from 'react';
import './Message.css';

const message = (props) => {
    return (
        <div className={'nes-container with-title is-rounded is-centered message'}>
            <p className={'title'}>Message</p>
            <textarea className={'text'} value={props.text}></textarea>
        </div>
        );
}

export default message;