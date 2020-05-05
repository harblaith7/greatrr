import React, {useState} from 'react'
import "./IndividualGoal.scss"
import {motion, useMotionValue, useTransform, AnimatePresence} from "framer-motion"

export default function IndividualGoal(props) {

    const x = useMotionValue(0)
    const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])
    const [isCardActive, setIsCardActive] = useState(true)
    const [statusColor, setStatusColor] = useState("rgb(207, 123, 123)")
    console.log(x)

    const changeStatus = () => {
        const {status, id, timePeriod} = props.goal

        if(status === "Not Complete") {
            props.updateStatus(id, "In Progress", timePeriod)
            setStatusColor("rgb(236, 143, 163)")

        } else if (status === "In Progress") {
            props.updateStatus(id, "Almost Complete", timePeriod)
            setStatusColor("rgb(123, 207, 207)")

        } else if (status === "Almost Complete") {
            props.updateStatus(id, "Complete", timePeriod)
            setStatusColor("rgb(143, 236, 182)")

        } else {
            props.updateStatus(id, "Not Complete", timePeriod)
            setStatusColor("rgb(6, 151, 67)")
        }
    }


    return (
        <AnimatePresence>
            <motion.div exit={{height:0, overflow: "hidden"}} onClick={changeStatus} >
                {isCardActive && (
                    <motion.div 
                        drag = "x"
                        className="IndividualGoal"
                        style = {{
                            x,
                            opacity,
                            backgroundColor: statusColor
                        }}
                        onDragEnd={(e, info) => {
                            if(info.point.x > 85){
                                setIsCardActive(false)
                                props.removeGoal(props.goal.id, props.goal.timePeriod)
                            }
                        }}
                        dragConstraints = {{
                            left: 0,
                            right: 0
                        }}
                    >
                        {props.goal.goal}
                    </motion.div>
                )}
            </motion.div>
        </AnimatePresence>
    )
}
