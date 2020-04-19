import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import list from "../../assets/svg/list.svg"
import "./ListModal.scss"
import {connect} from "react-redux"
import {addUserHabits} from "../../actions"
import {motion} from "framer-motion"
import HabitItem from "../HabitItem/HabitItem"


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

function SpringModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const displayHabit = () => {
      return props.habitsList.map(habit => {
        return (
            <HabitItem
                habitName={habit.habitName}
                dailyHabit={habit.dailyHabit}
                deleteHabit={props.deleteHabit}
            />
          )
      })
  }

  const handleClick = async () => {
    
    await props.addUserHabits(props.auth._id, props.habitsList)
    window.location.reload(); 
  }

  return (
    <div>
      <motion.div 
        className="CreateHabitsForm__list-container" 
        onClick={handleOpen}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{delay: 2}}
      >
            <img src={list} alt="" className="CreateHabitsForm__icon"/>
        </motion.div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="ListModal">
            <div className="ListModal__container">
                <h2 className="ListModal__heading">
                    Habits List
                </h2>
                <div className="ListModal__list-container">
                    {displayHabit()}
                </div>
                <button className="ListModal__add-all-btn" onClick={handleClick}>
                  Add Habits
                </button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

function mapStateToProps({auth}){
  return {
    auth
  }
}


export default connect(mapStateToProps, {addUserHabits})(SpringModal)