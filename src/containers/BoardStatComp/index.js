import React from 'react';
import CardStateView from '../../component/views/CardStateView'
import CardLabelView from '../../component/views/CardLabelView'
import CardsNumberView from '../../component/views/CardsNumberView'
import MembersNumberView from '../../component/views/MembersNumberView'


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
                    <CardsNumberView data={5}/>
                    <CardsNumberView data={5}/>
                </div>

                <div className="row">
                    <CardStateView data={this.state.cardsData}/>
                    <CardLabelView data={this.state.labelsData}/>
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
