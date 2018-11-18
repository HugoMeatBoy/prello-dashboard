

const DataToCardsListChart = (data) => {
    
    var lists = [];
    
    if(data.board){
        lists = data.board.lists;
    }
    else if(data.data){
        lists = data.data.lists;
    }

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


    cardChartsData.labels = listNameList;
    cardChartsData.data = resultList;
    cardChartsData.cols = colors;

    return cardChartsData;
};

export default DataToCardsListChart;