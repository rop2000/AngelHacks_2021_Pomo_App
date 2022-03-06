import React, { Component } from 'react';
import RedPanda from '../../assets/redpanda.png';

class About extends Component {
    render() {
        return (
            <section class="section">
                <h1
                    class="title"
                    style={{ fontSize: '50px', marginBottom: '50px' }}
                >
                    What is Pomo?
                </h1>
                <p
                    class="subtitle"
                    style={{ padding: '10px', fontSize: '25px' }}
                >
                    Pomo is an interactive web app that helps teachers keep
                    students on task and prevents students from academic
                    burnout. <br />
                    Stay focused and productive with the power of the
                    <strong> Pomodoro</strong> technique:{' '}
                </p>
                <div class="timeline is-centered">
                    <header class="timeline-header">
                        <span
                            class="tag is-medium is-link"
                            style={{ fontSize: '30px' }}
                        >
                            Start
                        </span>
                    </header>
                    <div class="timeline-item is-danger">
                        <div
                            class="timeline-marker is-danger"
                            style={{
                                height: '25px',
                                width: '25px',
                                marginTop: '25px',
                            }}
                        ></div>
                        <div class="timeline-content">
                            <p
                                class="heading"
                                style={{
                                    fontSize: '25px',
                                }}
                            >
                                Working
                            </p>
                            <p
                                style={{
                                    fontSize: '20px',
                                }}
                            >
                                20 Minutes
                            </p>
                        </div>
                    </div>
                    <header class="timeline-header">
                        <span
                            class="tag is-primary"
                            style={{ fontSize: '20px' }}
                        >
                            5 Minute Break
                        </span>
                    </header>
                    <div class="timeline-item is-danger">
                        <div
                            class="timeline-marker is-danger"
                            style={{
                                height: '25px',
                                width: '25px',
                                marginTop: '25px',
                            }}
                        ></div>
                        <div class="timeline-content">
                            <p
                                class="heading"
                                style={{
                                    fontSize: '25px',
                                }}
                            >
                                Working
                            </p>
                            <p
                                style={{
                                    fontSize: '20px',
                                    paddingRight: '13px',
                                }}
                            >
                                20 Minutes
                            </p>
                        </div>
                    </div>
                    <header class="timeline-header">
                        <span
                            class="tag is-primary"
                            style={{ fontSize: '20px' }}
                        >
                            5 Minute Break
                        </span>
                    </header>
                    <div class="timeline-item is-danger">
                        <div
                            class="timeline-marker is-danger"
                            style={{
                                height: '25px',
                                width: '25px',
                                marginTop: '25px',
                            }}
                        ></div>
                        <div class="timeline-content">
                            <p
                                class="heading"
                                style={{
                                    fontSize: '25px',
                                }}
                            >
                                Working
                            </p>
                            <p
                                style={{
                                    fontSize: '20px',
                                }}
                            >
                                20 Minutes
                            </p>
                        </div>
                    </div>
                    <header class="timeline-header">
                        <span
                            class="tag is-primary"
                            style={{ fontSize: '20px' }}
                        >
                            20 Minute Break
                        </span>
                    </header>
                    <div class="timeline-item is-primary"></div>
                    <header class="timeline-header">
                        <span
                            class="tag is-medium is-link"
                            style={{ fontSize: '30px' }}
                        >
                            End
                        </span>
                    </header>
                </div>
                <p
                    class="subtitle"
                    style={{ fontSize: '25px', paddingTop: '35px' }}
                >
                    With Pomo, you can also connect an (adorable){' '}
                    <strong>Pomodaur companion </strong>to the app! This
                    companion contains a particle photon (an IoT-enabled chip)
                    and can communicate Pomodoro messages to you as well as
                    allow you to transmit messages back to the app!
                    Additionally, students earn virtual Pomos for finishing
                    their tasks.
                </p>
                <img
                    src={RedPanda}
                    style={{
                        width: '300px',
                        marginTop: '15x',
                        marginBottom: '25px',
                        marginRight: '100px',
                    }}
                ></img>
                <p class="subtitle" style={{ fontSize: '25px' }}>
                    Now, you can break up your tasks into manageable intervals
                    and earn Pomos on the way.{' '}
                    <strong>Can you collect them all!</strong>
                </p>
            </section>
        );
    }
}

export default About;
