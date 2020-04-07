import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import {motion} from 'framer-motion'
import "./SubmitModal.scss"

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

export default function SpringModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {longTermGoal, threeMonthGoal, dailyHabit, habitName, habitDuration, habitPriority} = props.formInput

  return (
    <div>
      <motion.button 
        className="CreateHabitsForm__submit-btn"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0, transition: {duration: 0.75}}}
        onClick={handleOpen}
        >
            Add Habit
        </motion.button>
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
          <div className="SubmitModal">
            <div className="SubmitModal__container">
                <div className="SubmitModal__text-container">
                    <h4 className="SubmitModal__heading">
                        Long-term Goal
                    </h4>
                    <p className="SubmitModal__user-input">
                        {longTermGoal}
                    </p>
                    <h4 className="SubmitModal__heading">
                        Three-month Goal
                    </h4>
                    <p className="SubmitModal__user-input">
                        {threeMonthGoal}
                    </p>
                    <h4 className="SubmitModal__heading">
                        Daily Habit
                    </h4>
                    <p className="SubmitModal__user-input">
                        {dailyHabit}
                    </p>
                    <h4 className="SubmitModal__heading">
                        Habit Name
                    </h4>
                    <p className="SubmitModal__user-input">
                        {habitName}
                    </p>
                    <div className="SubmitModal__number-inputs-container">
                        <div className="SubmitModal__number-input-container">
                            <h4 className="SubmitModal__heading">
                                Priority: 
                            </h4>
                            <p className="SubmitModal__user-input SubmitModal__user-input--number">
                                {habitPriority}
                            </p>
                        </div>
                        <div className="SubmitModal__number-input-container">
                            <h4 className="SubmitModal__heading">
                                Duration: 
                            </h4>
                            <p className="SubmitModal__user-input SubmitModal__user-input--number">
                                {habitDuration}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}