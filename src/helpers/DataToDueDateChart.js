import * as moment from 'moment';


const DataToDueDateChart = (data) => {
    let lists = [];

    if (data.board) {
        lists = data.board.lists;
    } else if (data.data) {
        lists = data.data.lists;
    }
    const cardChartsData = {};
    const labelsList = [];
    const resultList = [];

    // create a list of object {Label: occurence}
    const dueDateOccurence = [{
        label: 'Overdue',
        occ: 0,
    }, {
        label: 'Due today',
        occ: 0,
    }, {
        label: 'Due tomorrow',
        occ: 0,
    }, {
        label: 'Later this week',
        occ: 0,
    }, {
        label: 'Later this month',
        occ: 0,
    }, {
        label: 'More than 1 month',
        occ: 0,
    }, {
        label: 'No due date',
        occ: 0,
    }];


    dueDateOccurence.forEach((date) => {
        labelsList.push(date.label);
    });


    lists.forEach((l) => {
        l.cards.forEach((c) => {
            if (c.dueDate && c.dueDate.length > 0) {
                if (moment(c.dueDate).diff(moment(), 'days') < 0) {
                    dueDateOccurence.forEach((date) => {
                        if (date.label === 'Overdue') {
                            date.occ += 1;
                        }
                    });
                } else if (moment(c.dueDate).diff(moment(), 'days') < 1) {
                    dueDateOccurence.forEach((date) => {
                        if (date.label === 'Due today') {
                            date.occ += 1;
                        }
                    });
                } else if (moment(c.dueDate).diff(moment(), 'days') < 2) {
                    dueDateOccurence.forEach((date) => {
                        if (date.label === 'Due tomorrow') {
                            date.occ += 1;
                        }
                    });
                } else if (moment(c.dueDate).diff(moment(), 'weeks') < 1) {
                    dueDateOccurence.forEach((date) => {
                        if (date.label === 'Later this week') {
                            date.occ += 1;
                        }
                    });
                } else if (moment(c.dueDate).diff(moment(), 'months') < 1) {
                    dueDateOccurence.forEach((date) => {
                        if (date.label === 'Later this month') {
                            date.occ += 1;
                        }
                    });
                } else {
                    dueDateOccurence.forEach((date) => {
                        if (date.label === 'More than 1 month') {
                            date.occ += 1;
                        }
                    });
                }
            } else {
                dueDateOccurence.forEach((date) => {
                    if (date.label === 'No due date') {
                        date.occ += 1;
                    }
                });
            }
        });
    });


    dueDateOccurence.forEach((date) => {
        resultList.push(date.occ);
    });

    const colors = [];

    const dynamicColors = () => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgb(${r},${g},${b})`;
    };

    resultList.map(() => (colors.push(dynamicColors())));

    cardChartsData.labels = labelsList;
    cardChartsData.data = resultList;
    cardChartsData.cols = colors;

    return cardChartsData;
};

export default DataToDueDateChart;
