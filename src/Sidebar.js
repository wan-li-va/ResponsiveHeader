import React, { Component } from 'react';
import './App.css';
import Sections from './sections.js';
import Button from 'react-bootstrap/Button';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: ["Home", "World", "U.S.", "Politics", "Economy", "Business",
                "Tech", "Markets", "Opinion", "Life & Arts", "Real Estate", "WSJ.Magazine"],
            sections: Sections,
            list: null,
            isClicked: false,
        }
    }

    handleClick = () => {
        var list = this.state.topics.map((topic, index) => {
            return (
                <p className="sidebarTopic">{topic}</p>
            )
        })
        if (this.state.isClicked) {
            this.setState({ list: null, isClicked: false })
        }
        else { this.setState({ list: list, isClicked: true }) }
    }

    render() {

        return (
            <div className="Sidebar">
                <Button variant="secondary" size="sm" className="sidebarButton" onClick={this.handleClick}>Topics</Button>
                {this.state.list}
            </div>
        )
    }
}