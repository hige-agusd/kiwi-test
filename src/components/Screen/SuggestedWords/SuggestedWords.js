import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './SuggestedWords.css';

const suggestedWords = (props) => {
    const groupedWords = [];
    let wordsList = null;
    if (props.words) {
        const propsWords = [...props.words];
        const wordsListLength = propsWords.length;
        const longWords = propsWords[0] && propsWords[0].length > 5 ? (propsWords[0].length > 8) ? 'longest-words' : 'long-words' : '';
        const scrollStep = propsWords[0] && propsWords[0].length > 5 ? (propsWords[0].length > 8) ? 13 : 16 : 24;
        for (let i = 0; i < wordsListLength; i += 3) {
            groupedWords.push(propsWords.splice(0, 3));
        }
        wordsList = (
            <div className={'words-wrapper'}>
                <Grid fluid={true} className={'suggested-words'}>
                    {props.words.length ? groupedWords.map((wordsGroup, row) => (
                        <Row className={longWords} key={row} >
                            {wordsGroup.map((word, col) => {
                                const isSelected = (props.selected[0] === row && props.selected[1] === col) ? 'selected' : '';
                                return <Col xs={4} className={isSelected} key={word}>{word}</Col>
                            })}
                        </Row>
                    )) :
                        <Col xs={12}>No Matches Found</Col>
                    }
                </Grid>
            </div>);
        const element = document.getElementsByClassName('suggested-words')[0];
        if (element) {
            const pos = (props.selected[0] < 3) ? 0 : props.selected[0] - 2;
            element.scrollTop = pos * scrollStep;
        }
    }
    return (
        <>
            {wordsList}
        </>
    );
}

export default suggestedWords;