import React, { Component } from 'react';
import "./TotalStats.scss"
import PieChart from 'react-minimal-pie-chart';
import turtle from "../../assets/images/turtle.png"
import diamond from "../../assets/svg/diamond.svg"
import {connect} from "react-redux"

class TotalStats extends Component {

  constructor(props){
    super(props)
    this.state = {
      goalPoints : "",
      currentPoints: "",
      percentage: "",
      data: []
    }
  }

  componentDidMount = () => {

    const {userHabits} = this.props

    const goalPoints = userHabits.length * 350;

    const currentPoints = userHabits.reduce((acc, element) => {
      return acc + element.totalPoints
    }, 0)

    const percentage = Math.floor(currentPoints/goalPoints * 100)

    const data = userHabits.map(habit => {
      return {
        title: habit.habitName,
        color: habit.color,
        value: habit.totalPoints
      }
    })

    console.log(data)


      this.setState({
        goalPoints,
        currentPoints,
        percentage,
        data
      })
  }

    render() {
      console.log(this.props.userHabits)

      const {goalPoints, currentPoints, percentage, data} = this.state

      const lala = data

        return (
            <div className="TotalStats">
                <div className="TotalStats__container">
                    <div className="TotalStats__progress-container">
                        <h2 className="TotalStats__text-percentage">
                            You're <span>{percentage}%</span> there!
                        </h2>
                        <div className="TotalStats__progress-bar">
                            <img src={turtle} alt="" className="TotalStats__turtle" style={{left : `${percentage}%`}}/>
                            <div className="TotalStats__grass" style={{width : `${percentage}%`}}></div>
                        </div>
                        <h3 className="TotalStats__fraction">
                            {currentPoints}/{goalPoints} <img src={diamond} alt="" className="TotalStats__diamond"/>
                        </h3>
                    </div>
                    <div className="TotalStats__pie-container">
                        <PieChart
                             animate={true}
                             animationDuration={500}
                             animationEasing="ease-out"
                             cx={50}
                             cy={50}
                             data={data}
                             label
                             labelPosition={112}
                             labelStyle={{
                               fontFamily: 'sans-serif',
                               fontSize: '5px'
                             }}
                             lengthAngle={360}
                             lineWidth={25}
                             paddingAngle={5}
                             radius={50}
                             rounded={false}
                             startAngle={0}
                             viewBoxSize={[
                               100,
                               100
                             ]}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({userHabits}) => ({
  userHabits
})

export default connect(mapStateToProps)(TotalStats);