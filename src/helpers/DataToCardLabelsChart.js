const DataToCardLabelsChart = (data) => {
    let lists = [];

    if (data.board) {
        lists = data.board.lists;
    } else if (data.data) {
        lists = data.data.lists;
    }

    const cardChartsData = {};
    const labelsList = [];
    const labelsOccurence = [];
    const labelsColors = [];

    if (data.board) {
        data.board.labels.forEach((lab) => {
            labelsList.push(lab.name);
            labelsColors.push(lab.color);
        });
    } else {
        data.data.labels.forEach((lab) => {
            labelsList.push(lab.name);
            labelsColors.push(lab.color);
        });
    }

    // create a list of object {Label: occurence}
    labelsList.forEach((lab) => {
        labelsOccurence.push({ label: lab, occ: 0 });
    });

    const resultList = [];

    lists.forEach((l) => {
        l.cards.forEach((c) => {
            if (c.labels.length > 0) {
                c.labels.forEach((cardLab) => {
                    labelsOccurence.forEach((lab) => {
                        if (lab.label === cardLab.name) {
                            lab.occ += 1;
                        }
                    });
                });
            }
        });
    });


    labelsOccurence.forEach((lab) => {
        resultList.push(lab.occ);
    });

    const colors = [];

    const dynamicColors = function () {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgb(${r},${g},${b})`;
    };

    for (const i in resultList) {
        colors.push(dynamicColors());
    }

    cardChartsData.labels = labelsList;
    cardChartsData.data = resultList;
    cardChartsData.backgroundColor = labelsColors;
    cardChartsData.cols = colors;

    return cardChartsData;
};

export default DataToCardLabelsChart;
