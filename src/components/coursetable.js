import React, { Component } from 'react'
import "../Styling/coursetable.css"

class CourseTable extends Component {

    constructor(props) {
        super(props)
        this.state = {

            courses: [
                { code: 'CS3323', title: 'Principles of Programming Languages', term: "2022Sp", credits: 3, remove: <button class="remove-button">Remove</button> },
                { code: 'CS3823', title: 'Computational Theory', term: "2022Sp", credits: 3, remove: <button class="remove-button">Remove</button> }
            ]

        }
    }

    renderTableData() {
        return this.state.courses.map((course, index) => {
            const { code, title, term, credits, remove } = course
            return (
                <tr key={code}>
                    <td>{code}</td>
                    <td>{title}</td>
                    <td>{term}</td>
                    <td>{credits}</td>
                    <td>{remove}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.courses[0])
        return header.map((course, index) => {
            return <th key={index}>{course.toUpperCase()}</th>
        })
    }

    render () {
        return (
            <div class="plan-container">
                <h1 id ='title'>My Course Plan</h1>
                <table id='courses'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
                <button class="add-course">Add Course</button>
            </div>
        )
    }

}

export default CourseTable
