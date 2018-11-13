import React, { Fragment } from 'react';
import ListCardsView from '../../component/views/ListCardsView';
import CardLabelView from '../../component/views/CardLabelView';
import GeneralInfoView from '../../component/views/GeneralInfoView';
import BoardActivityView from '../../component/views/BoardActivityView';
import DueDateView from '../../component/views/DueDateView';
import MembersCardsView from '../../component/views/MembersCardsView';
import BoardOrientationView from '../../component/views/BoardOrientationView';
import ImportDataHeader from '../../component/views/ImportDataHeader';
import HomeView from '../../component/views/HomeView';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// ===== Models

// ===== Helpers
import DataToGeneral from '../../helpers/DataToGeneral';
import DataToCardsListChart from '../../helpers/DataToCardsListChart';
import DataToCardsLabelChart from '../../helpers/DataToCardsLabelChart';

import DataToBoardChart from '../../helpers/DataToBoardChart';
// ===== Components / Containers

// ===== Actions

// ===== Others
import './style.css';


class BoardStatComp extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            file:'',
            general:{
                membersNumber: '',
                cardsNumber: '',
                listsNumber: '',
                firstCardCreated: "",
                lastCardCreated: "",
                checklistsCompleted: ""
            },
            cardsData : {
                labels: [],
                datasets: [{
                    data: [],
                    backgroundColor: [
                    '#FF6384',
                    '#c48b56',
                    '#6ed589',
                    '#50000d',
                    '#55aaaa',
                    '#55addd',
                    '#55a055',
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
                    'Document',
                    'Conception',
                ],
                datasets: [{
                    data: [8, 10, 9, 4,5,8],
                    backgroundColor: [
                    '#FF6384',
                    '#c48b56',
                    '#c40f12',
                    '#55a05a',
                    '#54a00b',
                    '#6ea0c9'
                    ],
                    fill: -1,
                    borderColor: '#ffffff'
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


        this.handleFileChange = this.handleFileChange.bind(this);
        this.fileReader = new FileReader();

        this.fileReader.onload = (event) => {

            var gen = DataToGeneral(JSON.parse(event.target.result));
            var cardsList = DataToCardsListChart(JSON.parse(event.target.result));
            var cardsLabel = DataToCardsLabelChart(JSON.parse(event.target.result));
            var board = DataToBoardChart(JSON.parse(event.target.result));
            
            console.log(cardsLabel);

            if(gen){
                this.setState({
                    ...this.state,
                    general:{
                        listsNumber: gen.listsNumber,
                        cardsNumber: gen.cardsNumber,
                        membersNumber: gen.membersNumber,
                        checklistsCompleted: gen.checklistsCompleted,
                        lastCardCreated: gen.lastCardCreated,
                        firstCardCreated: gen.firstCardCreated
                    },

                })
            }
            if(cardsList){
                this.setState({
                    ...this.state,
                    cardsData:{
                        ...this.state.cardsData,
                        labels: cardsList.labels,
                        datasets:[{
                            data: cardsList.data,
                            backgroundColor: [
                                '#FF2284',
                                '#c48b56',
                                '#6ed589',
                                '#50000d',
                                '#55aaaa',
                                '#55addd',
                                '#55a055',
                                '#55a05a'
                                ]
                        }]
                    },
                })
            }
            if(board){
                this.setState({
                    ...this.state,
                    boardActivityData:{
                        ...this.state.boardActivityData,
                        labels: board.labels,
                        datasets:[{
                            label: "Created cards",
                            data: board.dates,
                            backgroundColor: '#36a2eb',
                            borderColor: '#36a2eb',
                            fill: false,
                        }]
                    },
                })
            }

        
            this.setState({ file: JSON.parse(event.target.result) });
        };
    }

    handleFileChange(selectedFiles){
        this.fileReader.readAsText(selectedFiles[0]);
    }

    render() {          
            return (this.state.file ? (
                
                <div className="boardStatsPanel">
                    <div className="row">
                        <div className="col-sm-12 boardSettingsBar">
                            <ImportDataHeader 
                                handleFileChange={this.handleFileChange} />
                        </div>
                    </div>
                <div className="boardNameRow">
                    <h1 className="boardName">{this.props.board ? this.props.board.name  : ''}</h1>
                </div>

                <div className="statsPanel">
                    <div className="overviewPanel">
                        <GeneralInfoView data={this.state.general}/>
                    </div>
                    

                    <div className="tabsPanel">
                        <Tabs>
                            <TabList>
                                <Tab>Cards</Tab>
                                <Tab>Board</Tab>
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
                            <div className="row">
                                <BoardOrientationView data={this.state.labelsData}/>
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className="row">
                                <MembersCardsView data={this.state.cardsPerMemberData}/>
                            </div>
                        </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
            ) : (
         
                <HomeView handleFileChange={this.handleFileChange} />
                
            )
            
        );
    }
}

BoardStatComp.propTypes = {
};
BoardStatComp.defaultProps = {
};

export default BoardStatComp;
