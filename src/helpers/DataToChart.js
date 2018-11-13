import React from 'react';


const DataToCardsChart = (data) => {
    
    var cardsLists = data.lists;

    var cardChartsData = {};
    var labelsList = [];
    var resultList = [];
    
    cardsLists.forEach(function(l) {
        var cptCards = 0;

        l.cards.forEach(function(c) {
            cptCards ++;
        })

        labelsList.push(l.name);
        resultList.push(cptCards);
    })

    cardChartsData.labels = labelsList;
    cardChartsData.data = resultList;

    return cardChartsData;
};

export default DataToCardsChart;