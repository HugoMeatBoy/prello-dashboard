import * as moment from 'moment';


const DataToMembersChart = (data) => {
    
    var lists = [];

    if(data.board){
        lists = data.board.lists
    }
    else lists = data.data.lists

    var membersList = [];

    if(data.board){
        membersList = data.board.members
    }
    else membersList = data.data.members

    var cardChartsData = {};
    var membersOccurence = [];
    var overdueOccurence = [];

    var labelsList = [];

    membersList.forEach(function(memb){
        if(data.data){
            labelsList.push(memb.member.fullName);
        }
        else labelsList.push(memb.fullName)
    })

    // create a list of object {Label: occurence}
    membersList.forEach(function(memb){
        if(data.data){
            membersOccurence.push({"_id":memb.member._id,"member":memb.member.fullName, "occ":0})
        }
        else membersOccurence.push({"_id":memb._id,"member":memb.fullName, "occ":0})
    })


    membersList.forEach(function(memb){
        if(data.data){
            overdueOccurence.push({"_id":memb.member._id,"member":memb.member.fullName, "occ":0})
        }
        else overdueOccurence.push({"_id":memb._id,"member":memb.fullName, "occ":0})
    })
    
    lists.forEach(function(l) {
        l.cards.forEach(function(c) {
            if(c.members.length>0){
                if(c.dueDate && c.dueDate.length>0 && moment(c.dueDate).diff(moment(), 'days')<0){
                    c.members.forEach(function(cardMember){
                        overdueOccurence.forEach(function(memb){
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