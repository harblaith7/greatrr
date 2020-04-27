import React, { Component } from 'react';
import ModalNav from "../ModalNav/ModalNav"
import HabitStats from "../HabitStats/HabitStats"
import TotalStats from "../TotalStats/TotalStats"


class HabitSections extends Component {

    constructor(props){
        super(props)
        this.state = {
            currentSection: "HabitStats"
        }
    }

    changeSection = (section) => {
        this.setState({
            currentSection: section
        })
    }

    displaySection = () => {
        const {currentSection} = this.state

        if(currentSection === "HabitStats"){
            return <HabitStats/>
        } else if (currentSection === "TotalStats"){
            return <TotalStats/>
        }
    }

    render() {
        return (
            <div className="HabitSections">
                <ModalNav
                    switchSection = {this.changeSection}
                />
                {this.displaySection()}
            </div>
        );
    }
}

export default HabitSections;