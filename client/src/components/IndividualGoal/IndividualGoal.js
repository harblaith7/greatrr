import React, {useState} from 'react'
import "./IndividualGoal.scss"
import {motion, useMotionValue, useTransform, AnimatePresence} from "framer-motion"

export default function IndividualGoal() {

    const x = useMotionValue(0)
    const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])
    const [isCardActive, setIsCardActive] = useState(true)
    console.log(x)

    return (
        <AnimatePresence>
            <motion.div exit={{height:0, overflow: "hidden"}}>
                {isCardActive && (
                    <motion.div 
                        drag = "x"
                        className="IndividualGoal"
                        style = {{
                            x,
                            opacity
                        }}
                        onDragEnd={(e, info) => {
                            if(info.point.x > 85){
                                setIsCardActive(false)
                            }
                        }}
                        dragConstraints = {{
                            left: 0,
                            right: 0
                        }}
                    >
                        Complete Habit Section on Greatrr
                    </motion.div>
                )}
            </motion.div>
        </AnimatePresence>
    )
}
