import * as moment from 'moment';


const DataToDueDateChart = (data) => {
    
    var lists = data.lists;

    var cardChartsData = {};  
    var labelsList = [];  
    var resultList = [];

    // create a list of object {Label: occurence}
    var dueDateOccurence = [{
        "label": "Overdue",
        "occ": 0,
    },{
        "label": "Due today",
        "occ":0,
    },{
        "label": "Due tomorrow",
        "occ":0,
    },{
        "label": "Later this week",
        "occ":0,
    },{
        "label": "Later this month",
        "occ":0,
    },{
        "label": "More than 1 month",
        "occ":0,
    }]
    

    dueDateOccurence.forEach(function(date){
        labelsList.push(date.label)
    })

    
    lists.forEach(function(l) {
        l.cards.forEach(function(c) {
            if(c.dueDate.length>0){
                if(moment(c.dueDate).diff(moment(), 'days')<0){
                    dueDateOccurence.forEach(function(date){
                        if(date.label === "Overdue"){
                            date.occ+=1
                        }
                    })
                }
                else if(moment(c.dueDate).diff(moment(), 'days')<1){
                    dueDateOccurence.forEach(function(date){
                        if(date.label === "Due today"){
                            date.occ+=1
                        }
                    })
                }
                else if(moment(c.dueDate).diff(moment(), 'days')<2){
                    dueDateOccurence.forEach(function(date){
                        if(date.label === "Due tomorrow"){
                            date.occ+=1
                        }
                    })
                }
                else if(moment(c.dueDate).diff(moment(), 'weeks')<1){
                    dueDateOccurence.forEach(function(date){
                        if(date.label === "Later this week"){
                            date.occ+=1
                        }
                    })
                }
                else if(moment(c.dueDate).diff(moment(), 'months')<1){
                    dueDateOccurence.forEach(function(date){
                        if(date.label === "Later this month"){
                            date.occ+=1
                        }
                    })
                }
                else {
                    dueDateOccurence.forEach(function(date){
                        if(date.label === "More than 1 month"){
                            date.occ+=1
                        }
                    })
                }
            }
        })  
    })


    dueDateOccurence.forEach(function(date){
        resultList.push(date.occ);
    })

    var colors = [];

    var dynamicColors = function() {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        return "rgb(" + r + "," + g + "," + b + ")";
     }

     for (var i in resultList) {
        colors.push(dynamicColors());
     }

    cardChartsData.labels = labelsList;
    cardChartsData.data = resultList;
    cardChartsData.cols = colors;

    return cardChartsData;
};

export default DataToDueDateChart;