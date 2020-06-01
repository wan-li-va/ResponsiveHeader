import React, { Component } from 'react';
import './App.css';

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        var sections = ((this.props.sections !== undefined) ? this.props.sections.map((topic, index) => {
            return (
                <p className="subtopic">{topic}</p>
            )
        }) : null)

        var more = ((this.props.more !== undefined) ? this.props.more.map((topic, index) => {
            return (
                <p>{topic}</p>
            )
        }) : null)

        var regions = ((this.props.regions !== undefined) ? this.props.regions.map((topic, index) => {
            return (
                <p>{topic}</p>
            )
        }) : null)

        var colandblogs = ((this.props.colandblogs !== undefined) ? this.props.colandblogs.map((topic, index) => {
            return (
                <p>{topic}</p>
            )
        }) : null)

        return (
            <div className="dropdown-content">
                <div className="sectionHeaders">
                    {(regions !== null) ? <div className="subcategories"><h6 >Regions </h6>{regions} </div> : <div></div>}
                    {(sections !== null) ? <div className="subcategories"><h6>Sections </h6>{sections} </div> : <div></div>}
                    {(more !== null) ? <div className="subcategories"><h6>More </h6>{more} </div> : <div></div>}
                    {(colandblogs !== null) ? <div className="subcategories"><h6>Columns and Blogs </h6>{colandblogs} </div> : <div></div>}
                </div>
            </div>
        )
    }
}