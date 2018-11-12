import React from 'react';

const DataToGeneral = (data) => {
    var cardsLists = data.default.lists;
    var generalInfo = {};

    var cardsCpt = 0;

    cardsLists.forEach(function(l) {
        cardsCpt += l.cards.length;
    });
    
 
    generalInfo.listsNumber = cardsLists.length;
    generalInfo.cardsNumber = cardsCpt;

    return generalInfo;
 
    /*   {
        membersNumber: 5,
        cardsNumber: 25,
        listsNumber: 7,
        firstCardCreated: "2018-10-01 - 16:49:25",
        lastCardCreated: "2018-12-07 - 14:09:42",
        checklistsCompleted: "64"
    }, */
};

export default DataToGeneral;