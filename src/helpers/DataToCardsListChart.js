

const DataToCardsListChart = (data) => {
    
    var cardsLists = data.lists;

    var cardChartsData = {};
    var listNameList = [];
    var resultList = [];
    
    cardsLists.forEach(function(l) {
        var cptCards = 0;

        l.cards.forEach(function(c) {
            cptCards ++;
        })

        listNameList.push(l.name);
        resultList.push(cptCards);
    })

    cardChartsData.labels = listNameList;
    cardChartsData.data = resultList;

    return cardChartsData;
};

export default DataToCardsListChart;