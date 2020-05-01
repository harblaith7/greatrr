import React, { Component } from 'react';
import ModalNav from "../ModalNav/ModalNav"
import HabitStats from "../HabitStats/HabitStats"
import TotalStats from "../TotalStats/TotalStats"
import Settings from "../Settings/Settings"


class HabitSections extends Component {

    constructor(props){
        super(props)
        this.state = {
            currentSection: "Settings"
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
        } else if (currentSection === "Settings") {
            return <Settings/>
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