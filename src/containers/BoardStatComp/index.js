import React from 'react';
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
import DataToBoardActivityChart from '../../helpers/DataToBoardActivityChart';
import DataToCardLabelsChart from "../../helpers/DataToCardLabelsChart";
import DataToDueDateChart from "../../helpers/DataToDueDateChart";
import DataToMembersChart from "../../helpers/DataToMembersChart";

import JsonInputValidator from "../../validators/JsonInputValidator";

// ===== Components / Containers

// ===== Actions

// ===== Others
import './style.css';


class BoardStatComp extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            file:'',
            general:{},
            cardsData:{},
            boardActivityData:{},
            labelsData:{},
            dueDateData:{},
            cardsPerMemberData:{},
            errorMessage:'',
        }

        this.handleFileChange = this.handleFileChange.bind(this);
        this.fileReader = new FileReader();

        this.fileReader.onload = (event) => {

            
            if(JsonInputValidator(event.target.result)){
                this.setState({ file: JSON.parse(event.target.result) });

                var gen = DataToGeneral(JSON.parse(event.target.result));
                var cardsList = DataToCardsListChart(JSON.parse(event.target.result));
                var board = DataToBoardActivityChart(JSON.parse(event.target.result));
                var cardLabels = DataToCardLabelsChart(JSON.parse(event.target.result));
                
                var dueDates = DataToDueDateChart(JSON.parse(event.target.result));
                var members = DataToMembersChart(JSON.parse(event.target.result));


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
                if(cardLabels){
                    this.setState({
                        ...this.state,
                        labelsData:{
                            ...this.state.labelsData,
                            labels: cardLabels.labels,
                            datasets:[{
                                label: "Cards per label",
                                data: cardLabels.data,
                                backgroundColor: cardLabels.backgroundColor,
                                borderColor: '#000000',
                                fill: false,
                            }]
                        },
                    })
                }
                if(dueDates){
                    this.setState({
                        ...this.state,
                        dueDateData:{
                            ...this.state.dueDateData,
                            labels: dueDates.labels,
                            datasets:[{
                                label: "Due dates",
                                data: dueDates.data,
                                backgroundColor: dueDates.cols
                            }]
                        }
                    })
                }
                if(members){
                    this.setState({
                        ...this.state,
                        cardsPerMemberData:{
                            ...this.state.cardsPerMemberData,
                            labels: members.labels,
                            datasets:[{
                                label: "Overdue",
                                data: members.dataOverdue,
                                backgroundColor: members.overdueCols,
                            },{
                                label: "Due later",
                                data: members.dataInTime,
                                backgroundColor: members.inTimeCols,
                            }]
                        }
                    })
                }
            }else{
                console.log('NOT OKAY');
            }

            

        
        };
    }

    handleFileChange(selectedFiles){
        var x = selectedFiles[0].size;
        if(x < 5000000){
            this.fileReader.readAsText(selectedFiles[0]);
        }else{
            console.log('too much senpai');
        }
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
