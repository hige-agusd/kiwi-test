import React, { Component } from 'react';
import Message from '../../components/Screen/Message/Message';
import SuggestedWords from '../../components/Screen/SuggestedWords/SuggestedWords';
import {Grid} from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../store/index';
import './Screen.css';

class Screen extends Component {

    render() {
        return (
            <Grid fluid={true} className={'screen'} >
                <Message text={this.props.text} />
                <SuggestedWords words={this.props.suggestedWords} selected={this.props.selectedWord} />
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {
        suggestedWords: state.suggestedWords,
        selectedWord: state.selectedWord,
        text: state.text
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getWords: (digits) => dispatch(actions.getWords(digits)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen);