import * as moment from 'moment';


const DataToMembersChart = (data) => {
    let lists = [];

    if (data.board) {
        lists = data.board.lists;
    } else if (data.data) {
        lists = data.data.lists;
    }

    let membersList = [];

    if (data.board) {
        membersList = data.board.members;
    } else membersList = data.data.members;

    const cardChartsData = {};
    const membersOccurence = [];
    const overdueOccurence = [];

    const labelsList = [];

    membersList.forEach((memb) => {
        if (data.data) {
            labelsList.push(memb.member.fullName);
        } else labelsList.push(memb.fullName);
    });

    // create a list of object {Label: occurence}
    membersList.forEach((memb) => {
        if (data.data) {
            membersOccurence.push({ _id: memb.member._id, member: memb.member.fullName, occ: 0 });
        } else membersOccurence.push({ _id: memb._id, member: memb.fullName, occ: 0 });
    });


    membersList.forEach((memb) => {
        if (data.data) {
            overdueOccurence.push({ _id: memb.member._id, member: memb.member.fullName, occ: 0 });
        } else overdueOccurence.push({ _id: memb._id, member: memb.fullName, occ: 0 });
    });

    lists.forEach((l) => {
        l.cards.forEach((c) => {
            if (c.members.length > 0) {
                if (c.dueDate && c.dueDate.length > 0 && moment(c.dueDate).diff(moment(), 'days') < 0) {
                    c.members.forEach((cardMember) => {
                        overdueOccurence.forEach((memb) => {
                            if (memb._id === cardMember) {
                                memb.occ += 1;
                            }
                        });
                    });
                } else {
                    c.members.forEach((cardMember) => {
                        membersOccurence.forEach((memb) => {
                            if (memb._id === cardMember) {
                                memb.occ += 1;
                            }
                        });
                    });
                }
            }
        });
    });

    const inTimeResultsList = [];

    membersOccurence.forEach((member) => {
        inTimeResultsList.push(member.occ);
    });


    const overdueResultsList = [];
    overdueOccurence.forEach((member) => {
        overdueResultsList.push(member.occ);
    });

    const overdueColors = [];

    overdueResultsList.map(() => (overdueColors.push('#ff9f40')));


    const inTimeColors = [];

    inTimeResultsList.map(() => (inTimeColors.push('#55a05a')));


    cardChartsData.labels = labelsList;
    cardChartsData.dataInTime = inTimeResultsList;
    cardChartsData.dataOverdue = overdueResultsList;
    cardChartsData.overdueCols = overdueColors;
    cardChartsData.inTimeCols = inTimeColors;


    return cardChartsData;
};

export default DataToMembersChart;
