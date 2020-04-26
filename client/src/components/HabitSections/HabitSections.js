import React, { Component } from 'react';
import ModalNav from "../ModalNav/ModalNav"
import HabitStats from "../HabitStats/HabitStats"


class HabitSections extends Component {

    constructor(props){
        super(props)
        this.state = {
            currentSection: "HabitStats"
        }
    }

    displaySection = () => {
        const {currentSection} = this.state

        if(currentSection === "HabitStats"){
            return <HabitStats/>
        }
    }

    render() {
        return (
            <div className="HabitSections">
                <ModalNav/>
                {this.displaySection()}
            </div>
        );
    }
}

export default HabitSections;