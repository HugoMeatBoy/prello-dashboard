import React from 'react';


const DataToCardsLabelChart = (data) => {
    
    var cardsLists = data.lists;

    var cardChartsData = {};
    var labelsList = [];
    
    cardsLists.forEach(function(l) {
        l.cards.forEach(function(c) {
            c.labels.forEach(function(lab) {
                labelsList.push(l);
            })
        })
    })
  

    cardChartsData.labels = labelsList;

    return cardChartsData;
};

export default DataToCardsLabelChart;