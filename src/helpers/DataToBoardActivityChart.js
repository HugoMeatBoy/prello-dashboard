import * as moment from 'moment';

// ===== BOARD ACTIVITY =====
const DataToBoardActivityChart = (data) => {
    let cardsLists = [];

    if (data.board) {
        cardsLists = data.board.lists;
    } else if (data.data) {
        cardsLists = data.data.lists;
    }

    const boardChartsData = {};
    let cptJan = 0;
    let cptFeb = 0;
    let cptMar = 0;
    let cptApr = 0;
    let cptMay = 0;
    let cptJun = 0;
    let cptJul = 0;
    let cptAug = 0;
    let cptSep = 0;
    let cptOct = 0;
    let cptNov = 0;
    let cptDec = 0;


    cardsLists.forEach((l) => {
        l.cards.forEach((c) => {
            if (c.createdAt) {
                const cardDate = moment(c.createdAt).format('MM');
                switch (cardDate) {
                case '01':
                    cptJan += 1;
                    break;
                case '02':
                    cptFeb += 1;
                    break;
                case '03':
                    cptMar += 1;
                    break;
                case '04':
                    cptApr += 1;
                    break;
                case '05':
                    cptMay += 1;
                    break;
                case '06':
                    cptJun += 1;
                    break;
                case '07':
                    cptJul += 1;
                    break;
                case '08':
                    cptAug += 1;
                    break;
                case '09':
                    cptSep += 1;
                    break;
                case '10':
                    cptOct += 1;
                    break;
                case '11':
                    cptNov += 1;
                    break;
                case '12':
                    cptDec += 1;
                    break;
                default:
                }
            }
        });
    });

    const monthsList = [cptJan, cptFeb, cptMar, cptApr, cptMay, cptJun, cptJul, cptAug, cptSep, cptOct, cptNov, cptDec];
    const labelsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    boardChartsData.dates = monthsList;
    boardChartsData.labels = labelsList;

    return boardChartsData;
};

export default DataToBoardActivityChart;
