import React, { Component } from 'react';
import "./Steps.scss";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import longTermGoal from "../../assets/svg/long-term-goals.svg";
import breakDownGoals from "../../assets/svg/break-down-goals.svg";
import healthlyHabits from "../../assets/svg/healthy-habits.svg";
import calendar from "../../assets/svg/calendar-tracker.svg";
import meditation from "../../assets/svg/meditation.svg";
import activityTracker from "../../assets/svg/activity-tracker.svg"

class Steps extends Component {
    render() {
        return (
            <div className="Steps">
                <div className="Steps__container">

                    <div className="Steps__description-container">
                        <ScrollAnimation animateIn='fadeInDown' duration={.5} animateOnce >
                            <h2 className="Steps__heading">
                                Our 7 Steps to Success
                            </h2>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='fadeInDown' delay={200} animateOnce >
                            <p className="Steps__description">
                                Lorem, ipsum dolor sit amet consectetur concurrently and abolamasment adipisicing elit. Atque, sunt praesentium. Totam repudiandae voluptate nihil facere, et esse ut, sed cupiditate minima, ad est ex qui quaerat amet. Aliquid explicabo nulla repellendus culpa minima saepe natus voluptatibus reiciendis nihil earum, laudantium iure odio labore suscipit nostrum tempore aspernatur mollitia at?
                            </p>
                        </ScrollAnimation>
                    </div>

                    <div className="Steps__steps-container">

                        <ScrollAnimation animateIn='slideInRight' animateOnce duration={1} delay={500}>
                            <div className="Steps__step-one-container">
                                <div className="Steps__steps-description-container">
                                    <h2 className="Steps__heading"> <span>Step 1:</span>  state your long-term goals</h2>
                                    <p className="Steps__steps-description Steps__steps-description--first">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis recusandae quaerat, pariatur quidem quisquam iste.
                                        Dolore molestias aliquid minus voluptas? Beatae nihil dolorem accusantium eaque magnam animi aliquid dolores deserunt.
                                    </p>
                                    <p className="Steps__steps-description">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur mollitia, sit facilis eum assumenda vitae nihil distinctio aliquid nulla a est suscipit omnis perspiciatis. Beatae molestiae temporibus, similique id eaque quidem accusantium quasi ab adipisci, deserunt minima iusto asperiores!
                                        Amet molestiae sunt at delectus esse!
                                    </p>
                                </div>
                                <img src={longTermGoal} alt="" className="Steps__steps-image Steps__steps-image--step-one"/>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn='slideInLeft' animateOnce duration={1} delay={500}>
                        <div className="Steps__step-one-container">
                            <img src={breakDownGoals} alt="" className="Steps__steps-image Steps__steps-image--step-two"/>
                            <div className="Steps__steps-description-container Steps__steps-description-container--step-two">
                                <h2 className="Steps__heading"> <span>Step 2:</span>  break them down</h2>
                                <p className="Steps__steps-description Steps__steps-description--first">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo accusamus aliquam, quibusdam cumque fuga alias laborum accusantium, hic architecto ab minus rerum, deserunt amet minima illum quam sapiente excepturi asperiores!
                                </p>
                                <p className="Steps__steps-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis praesentium ipsum quam distinctio fugiat doloremque omnis animi, natus in voluptas, quasi dolorum iusto id. Praesentium.
                                </p>
                            </div>
                        </div>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn='fadeInUp' animateOnce duration={1} delay={500}>
                            <div className="Steps__step-one-container">
                                <div className="Steps__steps-description-container">
                                    <h2 className="Steps__heading"> <span>Step 3:</span>  set daily goals</h2>
                                    <p className="Steps__steps-description Steps__steps-description--first">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis recusandae quaerat, pariatur quidem quisquam iste.
                                        Dolore molestias aliquid minus voluptas? Beatae nihil dolorem accusantium eaque magnam animi aliquid dolores deserunt.
                                    </p>
                                    <p className="Steps__steps-description">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur mollitia, sit facilis eum assumenda vitae nihil distinctio aliquid nulla a est suscipit omnis perspiciatis. Beatae molestiae temporibus, similique id eaque quidem accusantium quasi ab adipisci, deserunt minima iusto asperiores!
                                        Amet molestiae sunt at delectus esse!
                                    </p>
                                </div>
                                <img src={healthlyHabits} alt="" className="Steps__steps-image Steps__steps-image--step-one"/>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn='fadeInDown' animateOnce duration={1} delay={500}>
                            <div className="Steps__step-one-container">
                                <div className="Steps__steps-description-container">
                                    <h2 className="Steps__heading"> <span>Step 4:</span>  track, track, track...</h2>
                                    <p className="Steps__steps-description Steps__steps-description--first">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis recusandae quaerat, pariatur quidem quisquam iste.
                                        Dolore molestias aliquid minus voluptas? Beatae nihil dolorem accusantium eaque magnam animi aliquid dolores deserunt.
                                    </p>
                                    <p className="Steps__steps-description">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, reprehenderit eaque voluptates expedita possimus non, ab vero vitae deleniti eum, ipsa reiciendis velit impedit maiores dicta a minima esse modi sequi est harum repellendus libero quos. Autem, recusandae alias? Ratione?
                                    </p>
                                </div>
                                <img src={calendar} alt="" className="Steps__steps-image Steps__steps-image--step-four"/>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn='slideInRight' animateOnce duration={1} delay={500}>
                            <div className="Steps__step-one-container">
                                <img src={meditation} alt="" className="Steps__steps-image Steps__steps-image--step-five"/>
                                <div className="Steps__steps-description-container Steps__steps-description-container--step-two">
                                    <h2 className="Steps__heading"> <span>Step 5:</span>  daily reminders</h2>
                                    <p className="Steps__steps-description Steps__steps-description--first">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo accusamus aliquam, quibusdam cumque fuga alias laborum accusantium, hic architecto ab minus rerum, deserunt amet minima illum quam sapiente excepturi asperiores!
                                    </p>
                                    <p className="Steps__steps-description">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis praesentium ipsum quam distinctio fugiat doloremque omnis animi, natus in voluptas, quasi dolorum iusto id. Praesentium.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn='slideInLeft' animateOnce duration={1} delay={500}>
                            <div className="Steps__step-one-container">
                                <div className="Steps__steps-description-container">
                                    <h2 className="Steps__heading"> <span>Step 6:</span>  stay consistent</h2>
                                    <p className="Steps__steps-description Steps__steps-description--first">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis recusandae quaerat, pariatur quidem quisquam iste.
                                        Dolore molestias aliquid minus voluptas? Beatae nihil dolorem accusantium eaque magnam animi aliquid dolores deserunt.
                                    </p>
                                    <p className="Steps__steps-description">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur mollitia, sit facilis eum assumenda vitae nihil distinctio aliquid nulla a est suscipit omnis perspiciatis. Beatae molestiae temporibus, similique id eaque quidem accusantium quasi ab adipisci, deserunt minima iusto asperiores!
                                        Amet molestiae sunt at delectus esse!
                                    </p>
                                </div>
                                <img src={activityTracker} alt="" className="Steps__steps-image Steps__steps-image--step-one"/>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn='zoomIn' animateOnce duration={1} delay={500}>
                            <div className="Steps__step-one-container Steps__step-one-container--last">
                                <div className="Steps__steps-description-container">
                                    <h2 className="Steps__heading"> <span>Step 7:</span>  reward yourself</h2>
                                    <p className="Steps__steps-description Steps__steps-description--first Steps__steps-description--last">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis recusandae quaerat, pariatur quidem quisquam iste.
                                        Dolore molestias aliquid minus voluptas? Beatae nihil dolorem accusantium eaque magnam animi aliquid dolores deserunt.
                                    </p>
                                    <p className="Steps__steps-description Steps__steps-description--last">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur mollitia, sit facilis eum assumenda vitae nihil distinctio aliquid nulla a est suscipit omnis perspiciatis. Beatae molestiae temporibus, similique id eaque quidem accusantium quasi ab adipisci, deserunt minima iusto asperiores!
                                        Amet molestiae sunt at delectus esse!
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>

                    </div>
                </div>
            </div>
        );
    }
}

export default Steps;