import React from 'react';
import CardStateView from '../../component/views/CardStateView'
import CardLabelView from '../../component/views/CardLabelView'
import GeneralInfoView from '../../component/views/GeneralInfoView'
import BoardActivityView from '../../component/views/BoardActivityView'


// ===== Models

// ===== Components / Containers

// ===== Actions

// ===== Others
import './style.css';


class BoardStatComp extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            general:{
                membersNumber: 5,
                cardsNumber: 25,
                listsNumber: 7,
                firstCardCreated: "2018-10-01 - 16:49:25",
                lastCardCreated: "2018-12-07 - 14:09:42"
            },
            cardsData : {
                labels: [
                    'To do',
                    'In process',
                    'Testing',
                    'Done',
                ],
                datasets: [{
                    label:'Cards state',
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
            },

            boardActivityData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [{
					label: 'Created cards',
					backgroundColor: '#36a2eb',
					borderColor: '#36a2eb',
					data: [10,20,40,2,29,17,3],
					fill: false,
                },
                {
					label: 'Validated cards',
					fill: false,
					backgroundColor: '#8bcb63',
					borderColor: '#8bcb63',
					data: [8,13,23,10,29,19,4],
					fill: false,
				}]
            },
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

                <GeneralInfoView data={this.state.general}/>

                <div className="row">
                    <CardStateView data={this.state.cardsData}/>
                    <CardLabelView data={this.state.labelsData}/>
                </div>
                <div className="row">
                    <BoardActivityView data={this.state.boardActivityData}/>
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
