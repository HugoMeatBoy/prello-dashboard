

const DataToCardsListChart = (data) => {
    
    var lists = data.board.lists;

    var cardChartsData = {};
    var listNameList = [];
    var resultList = [];
    
    lists.forEach(function(l) {
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