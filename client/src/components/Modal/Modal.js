import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import rightArrow from "../../assets/svg/next.svg";
import "./Modal.scss";
import ModalNav from "../ModalNav/ModalNav"
import CircularProgressBar from "../CircularProgressBar/CircularProgressBar"

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

  return (
    <div className="ModalButton">
      
      <img src={rightArrow} onClick={handleOpen} className="ModalButton__btn" alt="right arrow to trigger modal"/>
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
          <div className={"Modal"}>
            <ModalNav/>
            <div className="Modal__section-container">
            <div className="Modal__page-section-container">
                <div className="Modal__progress-bar-container">
                  <CircularProgressBar/>
                  <div className="Modal__progress-score-container">
                    <h2 className="Modal__progress-score">5/6</h2>
                  </div>
                </div>
              </div>
              <div className="Modal__heading-container">
                <h3 className="Modal__habit-heading" >{props.habitInfo.habit}</h3>
                <p className="Modal__habit-week"> Week 3</p>
              </div>
              <div className="Modal__week-tracker-container">
                <div className="Modal__week-box">
                  M
                </div>
                <div className="Modal__week-box">
                  T
                </div>
                <div className="Modal__week-box">
                  W
                </div>
                <div className="Modal__week-box">
                  Th
                </div>
                <div className="Modal__week-box">
                  F
                </div>
                <div className="Modal__week-box">
                  S
                </div>
                <div className="Modal__week-box">
                  S
                </div>
              </div>
              Points Earned this Week: 50
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}