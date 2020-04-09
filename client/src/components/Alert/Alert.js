import React, { Component } from 'react';
import "./Alert.scss";
import {motion, AnimatePresence} from "framer-motion"

class Alert extends Component {

  

  render() {
    return (
        
          <motion.div 
            className="Alert"
            initial={{y : "-150%"}}
            animate={{y: 0}}
            exit = {{y: "-150%", transition: {damping: 500}}}
          >
            <div className="Alert__container">
                <h3 className="Alert__heading">
                  Habit Added to List - 
                </h3>
                <p className="Alert__message">
                  Make sure to save when you are done!
                </p>
            </div>
          </motion.div>
        

    );
  }
}

export default Alert;