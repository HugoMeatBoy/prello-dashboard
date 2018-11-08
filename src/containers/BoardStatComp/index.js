import React from 'react';
import ListCardsView from '../../component/views/ListCardsView';
import CardLabelView from '../../component/views/CardLabelView';
import GeneralInfoView from '../../component/views/GeneralInfoView';
import BoardActivityView from '../../component/views/BoardActivityView';
import DueDateView from '../../component/views/DueDateView';
import MembersCardsView from '../../component/views/MembersCardsView';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
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

            dueDateData: {
                labels: ['Overdue', 'Due tomorrow', 'Later this week', 'Later this month'],
                datasets: [{
                    data: [2,1,7,3],
                    backgroundColor: [
                        '#FF6384',
                        '#c48b56',
                        '#6ea0c9',
                        '#55a05a'
                    ],
                    borderColor: '#FF6384',
                    fill: -1
                }]
            },
            cardsPerMemberData: {
                labels: ['Clément R', 'Kévin H', 'Hugo F', 'Clément L', 'Cyprien L'],
                datasets: [{
                    label: "Overdue",
                    data: [0,1,1,3,2],
                    backgroundColor:[
                        '#ff9f40',
                        '#ff9f40',
                        '#ff9f40',
                        '#ff9f40',
                        '#ff9f40'
                    ]
                },{
                    label: "Due later",
                    data: [7,5,3,4,3],
                    backgroundColor:[
                        '#55a05a',
                        '#55a05a',
                        '#55a05a',
                        '#55a05a',
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
                    </div>
                </div>

                <GeneralInfoView data={this.state.general}/>

                <Tabs>
                    <TabList>
                        <Tab>Cards</Tab>
                        <Tab>Baord</Tab>
                        <Tab>Members</Tab>
                    </TabList>

                <TabPanel>
                    <div className="row">
                        <ListCardsView data={this.state.cardsData}/>
                        <CardLabelView data={this.state.labelsData}/>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="row">
                        <BoardActivityView data={this.state.boardActivityData}/>
                        <DueDateView data={this.state.dueDateData}/>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="row">
                        <MembersCardsView data={this.state.cardsPerMemberData}/>
                    </div>
                </TabPanel>

                </Tabs>
            </div>
        );
    }
}

BoardStatComp.propTypes = {
};
BoardStatComp.defaultProps = {
};

export default BoardStatComp;
