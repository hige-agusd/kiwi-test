import React, { Component } from 'react';
import Message from '../../components/Screen/Message/Message';
import ContextualMenu from '../../components/Screen/ContextualMenu/ContextualMenu';
import SuggestedWords from '../../components/Screen/SuggestedWords/SuggestedWords';
import {Grid} from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../store/index';
import './Screen.css';

class Screen extends Component {

    render() {
        let options = [];
        if (!this.props.suggestedWords) {
            options = [this.props.mode === 'dict' ? '' : 'dict', '<bckspc', this.props.mode === '' ? '' : 'T9'];
        } else {
            options = [this.props.mode === 'dict' ? 'Cancel' : 'dict', 'Select', this.props.mode === '' ? 'Cancel' : 'T9'];
        }
        return (
            <Grid fluid={true} className={'screen'} >
                <Message text={this.props.text} />
                <ContextualMenu options={options} />
                <SuggestedWords words={this.props.suggestedWords} selected={this.props.selectedWord} />
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {
        suggestedWords: state.suggestedWords,
        selectedWord: state.selectedWord,
        text: state.text,
        mode: state.mode
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getWords: (digits) => dispatch(actions.getWords(digits)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen);