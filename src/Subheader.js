import React, { Component } from 'react';
import './App.css';
import Dropdown from './Dropdown.js';
import Sections from './sections.js';
// import Tabs from 'react-bootstrap/Tabs';
// import Tab from 'react-bootstrap/Tab';

export default class Subheader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // topics: ["Home", "World", "U.S."],
            topics: ["Home", "World", "U.S.", "Politics", "Economy", "Business",
                "Tech", "Markets", "Opinion", "Life & Arts", "Real Estate", "WSJ.Magazine"],
            sections: Sections,
        }
    }

    render() {
        console.log(this.state.sections)
        var list = this.state.topics.map((topic, index) => {
            return (
                <div className="dropdown">
                    <h6 className="topic">{topic}</h6>
                    {/* <Tab title={topic}></Tab> */}
                    {(this.state.sections[index].Sections !== undefined || this.state.sections[index].More) ?
                        <div className="dropdown">
                            {/* {console.log(this.state.sections[index])} */}
                            <Dropdown 
                                sections={this.state.sections[index].Sections} 
                                more={this.state.sections[index].More}
                                regions={this.state.sections[index].Regions}
                                colandblogs={this.state.sections[index]['Columns & Blogs']}
                            />
                        </div> : <div></div>}
                </div>
            )
        })
        return (
            <div className="list">
                {/* <Tabs> */}
                {list}
                {/* </Tabs> */}
            </div>
        )
    }
}