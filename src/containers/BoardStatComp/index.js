import React from 'react';
import {Pie, Doughnut, Line} from 'react-chartjs-2';
// ===== Models

// ===== Components / Containers

// ===== Actions

// ===== Others
import './style.css';


class BoardStatComp extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            cardsData : {
                labels: [
                    'Due date missed',
                    'In process',
                    'Todo',
                    'Done in time',
                ],
                datasets: [{
                    data: [4, 45, 48, 29],
                    backgroundColor: [
                    '#FF6384',
                    '#c48b56',
                    '#6ea0c9',
                    '#55a05a'
                    ]
                }]
            },
            labelsData: {
                labels: [
                    'Back-end',
                    'Front-end',
                    'Urgent',
                    'Database',
                ],
                datasets: [{
                    data: [8, 10, 9, 4],
                    backgroundColor: [
                    '#FF6384',
                    '#c48b56',
                    '#6ea0c9',
                    '#55a05a'
                    ]
                }]
            }
        }
    }


    render() {
        return (
            <div className="boardStatsPanel">
                <div className="row">
                    <div className="col-sm-12 boardSettingsBar">
                        <h1 className="boardSettingsBtn boardName">{this.props.board.name}</h1>
                        <i className="far fa-star boardSettingsBtn starBtn" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        Number of cards in board: <b>16</b>
                    </div>
                    <div className="col-sm-6">
                        Number of members in board: <b>5</b>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                    <h1 className="chartTitle">
                        Cards state
                    </h1>
                        <Pie data = {this.state.cardsData} 
                        width={38}
                        height={10}
                        options={{
                            maintainAspectRatio: true
                        }}
                        />
                    </div>
                    <div className="col-sm-6">
                        <h1 className="chartTitle">
                            Cards labels
                        </h1>
                        <Doughnut 
                            data = {this.state.labelsData} 
                            width={50}
                            height={10}
                            options={{
                                maintainAspectRatio: true,
                                circumference: Math.PI,
                                rotation: Math.PI
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

BoardStatComp.propTypes = {
};
BoardStatComp.defaultProps = {
};

export default BoardStatComp;
