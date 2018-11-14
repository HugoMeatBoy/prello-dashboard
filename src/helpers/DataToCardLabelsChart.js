const DataToCardLabelsChart = (data) => {
    
    var lists = data.board.lists;

    var cardChartsData = {};
    var labelsList = data.board.labels;
    var labelsOccurence = [];

    // create a list of object {Label: occurence}
    labelsList.forEach(function(lab){
        labelsOccurence.push({"label":lab.name, "occ":0})
    })

    var resultList = [];
    
    lists.forEach(function(l) {
        l.cards.forEach(function(c) {
            if(c.labels.length>0){
                c.labels.forEach(function(cardLab){
                    labelsOccurence.forEach(function(lab){
                        if(lab.label === cardLab.name){
                            lab.occ += 1
                        }
                    })
                })
            }
        })

        
    })


    labelsOccurence.forEach(function(lab){
        resultList.push(lab.occ);
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

    cardChartsData.labels = labelsOccurence;
    cardChartsData.data = resultList;
    cardChartsData.cols = colors;

    return cardChartsData;
};

export default DataToCardLabelsChart;