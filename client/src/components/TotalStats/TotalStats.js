import React, { Component } from 'react';
import "./TotalStats.scss"
import PieChart from 'react-minimal-pie-chart';
import turtle from "../../assets/images/turtle.png"
import diamond from "../../assets/svg/diamond.svg"

class TotalStats extends Component {
    render() {
        return (
            <div className="TotalStats">
                <div className="TotalStats__container">
                    <div className="TotalStats__progress-container">
                        <h2 className="TotalStats__text-percentage">
                            You're <span>30%</span> there!
                        </h2>
                        <div className="TotalStats__progress-bar">
                            <img src={turtle} alt="" className="TotalStats__turtle"/>
                            <div className="TotalStats__grass"></div>
                        </div>
                        <h3 className="TotalStats__fraction">
                            300/1000 <img src={diamond} alt="" className="TotalStats__diamond"/>
                        </h3>
                    </div>
                    <div className="TotalStats__pie-container">
                        <PieChart
                             animate={true}
                             animationDuration={500}
                             animationEasing="ease-out"
                             cx={50}
                             cy={50}
                             data={[
                               {
                                 color: '#E38627',
                                 title: 'One',
                                 value: 10
                               },
                               {
                                 color: '#C13C37',
                                 title: 'Two',
                                 value: 15
                               },
                               {
                                 color: '#6A2135',
                                 title: 'Three',
                                 value: 20
                               }
                             ]}
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

export default TotalStats;