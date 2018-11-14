import * as moment from 'moment';


const DataToMembersChart = (data) => {
    
    var lists = data.board.lists;

    var cardChartsData = {};
    var membersList = data.board.members;
    var membersOccurence = [];
    var overdueOccurence = [];

    var labelsList = [];

    membersList.forEach(function(memb){
        labelsList.push(memb.fullName);
    })

    // create a list of object {Label: occurence}
    membersList.forEach(function(memb){
        membersOccurence.push({"_id":memb._id,"member":memb.fullName, "occ":0})
    })


    membersList.forEach(function(memb){
        overdueOccurence.push({"_id":memb._id,"member":memb.fullName, "occ":0})
    })
    
    lists.forEach(function(l) {
        l.cards.forEach(function(c) {
            if(c.members.length>0){
                if(c.dueDate.length>0 && moment(c.dueDate).diff(moment(), 'days')<0){
                    c.members.forEach(function(cardMember){
                        console.log(cardMember)
                        overdueOccurence.forEach(function(memb){
                            console.log(memb._id)
                            if(memb._id === cardMember){
                                memb.occ+=1
                            }
                        })
                    })
                }
                else {
                    c.members.forEach(function(cardMember){
                        membersOccurence.forEach(function(memb){
                            if(memb._id === cardMember){
                                memb.occ+=1
                            }
                        })
                    })
                }
            }
        })

        
    })

    var inTimeResultsList = []

    membersOccurence.forEach(function(member){
        inTimeResultsList.push(member.occ)
    })


    var overdueResultsList = []
    overdueOccurence.forEach(function(member){
        overdueResultsList.push(member.occ)
    })

    var overdueColors = [];

    for (var i in overdueResultsList) {
        overdueColors.push('#ff9f40');
    }

    var inTimeColors = [];

    for (var i in inTimeResultsList) {
        inTimeColors.push('#55a05a');
    }

    cardChartsData.labels = labelsList;
    cardChartsData.dataInTime = inTimeResultsList;
    cardChartsData.dataOverdue = overdueResultsList;
    cardChartsData.overdueCols = overdueColors;
    cardChartsData.inTimeCols = inTimeColors;
    

    return cardChartsData;
};

export default DataToMembersChart;