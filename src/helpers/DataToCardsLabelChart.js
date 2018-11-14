import React from 'react';


const DataToCardsLabelChart = (data) => {
    
    var lists = data.lists;
    var labelsList = data.labelsList;

    var cardChartsData = {};
    var labelsResultList = [];

    labelsList.forEach(function(labs){
        labelsResultList.push({"_id":labs._id,"name":labs.name,"count":0});
    })
    

    lists.forEach(function(list) {

        list.cards.forEach(function(card) {

            card.labels.forEach(function(label) {

                labelsList.forEach(function(lab) {

                    if(lab.name === label){
                        lab.count = lab.count + 1;
                    }
                    
                })
            })
        })
    })
  
    cardChartsData.data = labelsResultList;

    return cardChartsData;
};

export default DataToCardsLabelChart;