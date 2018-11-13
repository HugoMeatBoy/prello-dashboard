import React from 'react';
import * as moment from 'moment';

// ===== BOARD ACTIVITY =====
const DataToBoardChart = (data) => {
    
    var cardsLists = data.lists;

    var boardChartsData = {};
    var cptJan = 0;
    var cptFeb = 0;
    var cptMar = 0;
    var cptApr = 0;
    var cptMay = 0;
    var cptJun = 0;
    var cptJul = 0;
    var cptAug = 0;
    var cptSep = 0;
    var cptOct = 0;
    var cptNov = 0;
    var cptDec = 0;

    
    cardsLists.forEach(function(l) {
        l.cards.forEach(function(c) {
            let cardDate = moment(c.creationDate).format("MM");
            switch(cardDate){
                case '01':
                    cptJan+=1;
                    break;
                case '02':
                    cptFeb+=1;
                    break;
                case '03':
                    cptMar+=1;
                    break;
                case '04':
                    cptApr+=1;
                    break;
                case '05':
                    cptMay+=1;
                    break;
                case '06':
                    cptJun+=1;
                    break;
                case '07':
                    cptJul+=1;
                    break;
                case '08':
                    cptAug+=1;
                    break;
                case '09':
                    cptSep+=1;
                    break;
                case '10':
                    cptOct+=1;
                    break;
                case '11':
                    cptNov+=1;
                    break;
                case '12':
                    cptDec+=1;
                    break;
                default:
            }
        })
    });

    var monthsList = [cptJan, cptFeb, cptMar, cptApr, cptMay, cptJun, cptJul, cptAug, cptSep, cptOct, cptNov, cptDec];
    const labelsList=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    boardChartsData.dates = monthsList;
    boardChartsData.labels = labelsList;

    return boardChartsData;
};

export default DataToBoardChart;