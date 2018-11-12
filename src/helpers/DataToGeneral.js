import React from 'react';

const DataToGeneral = (data) => {
    if(data.default){
        var cardsLists = data.default.lists;
    }else{
        var cardsLists = data.lists;
    }
    var generalInfo = {};

    var cardsCpt = 0;
    var cardsCompletedCpt = 0;
    var firstCreation = '';
    var lastCreation = '';

    cardsLists.forEach(function(l) {
        cardsCpt += l.cards.length;
        l.cards.forEach(function(c) {
            if(c.isValidated){ cardsCompletedCpt ++; }
        })
    });


    generalInfo.listsNumber = cardsLists.length;
    generalInfo.cardsNumber = cardsCpt;
    generalInfo.checklistsCompleted = cardsCompletedCpt / cardsCpt * 100;


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