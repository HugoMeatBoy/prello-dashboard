

const DataToCardsListChart = (data) => {
    let lists = [];

    if (data.board) {
        lists = data.board.lists;
    } else if (data.data) {
        lists = data.data.lists;
    }

    const cardChartsData = {};
    const listNameList = [];
    const resultList = [];

    lists.forEach((l) => {
        let cptCards = 0;

        l.cards.forEach(() => {
            cptCards += 1;
        });

        listNameList.push(l.name);
        resultList.push(cptCards);
    });

    const colors = [];

    const dynamicColors = () => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgb(${r},${g},${b})`;
    };

    resultList.map(() => (colors.push(dynamicColors())));


    cardChartsData.labels = listNameList;
    cardChartsData.data = resultList;
    cardChartsData.cols = colors;

    return cardChartsData;
};

export default DataToCardsListChart;
