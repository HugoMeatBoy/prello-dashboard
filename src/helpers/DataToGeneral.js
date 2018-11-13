import React from 'react';
import * as moment from 'moment';



const DataToGeneral = (data) => {
    moment().format();
    var cardsLists = data.lists;
    

    var generalInfo = {};

    var cardsCpt = 0;
    var cardsCompletedCpt = 0;
    var firstCreation = undefined;
    var lastCreation = undefined; 

    cardsLists.forEach(function(l) {
        cardsCpt += l.cards.length;
        l.cards.forEach(function(c) {
            if(c.isValidated){ cardsCompletedCpt ++; }

            let cardDate = moment(c.creationDate);
            if(firstCreation === undefined){ firstCreation = cardDate }
            else if(lastCreation === undefined){ lastCreation = cardDate  }
            else if(cardDate.isBefore(firstCreation)){ firstCreation = cardDate }
            else if(cardDate.isAfter(lastCreation)){ lastCreation = cardDate }

        })
    });

    generalInfo.listsNumber = cardsLists.length;
    generalInfo.cardsNumber = cardsCpt;
    generalInfo.checklistsCompleted = Math.floor(cardsCompletedCpt / cardsCpt *100);
    generalInfo.firstCardCreated = firstCreation.format("hh:mm DD/MM/YYYY");
    generalInfo.lastCardCreated = lastCreation.format("hh:mm DD/MM/YYYY");
    generalInfo.membersNumber = data.membersList.length;

    return generalInfo;
};

export default DataToGeneral;