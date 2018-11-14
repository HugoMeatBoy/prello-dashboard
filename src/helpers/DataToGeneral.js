import * as moment from 'moment';


// ===== GENERAL OVERVIEW
const DataToGeneral = (data) => {
    var cardsLists = data.board.lists;
    

    var generalInfo = {};

    var cardsCpt = 0;
    var cardsCompletedCpt = 0;
    var firstCreation = undefined;
    var lastCreation = undefined; 

    cardsLists.forEach(function(l) {
        cardsCpt += l.cards.length;
        l.cards.forEach(function(c) {
            if(c.isArchived){ cardsCompletedCpt ++; }

            let cardDate = moment(c.createdAt);
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
    generalInfo.membersNumber = data.board.members.length;

    return generalInfo;
};

export default DataToGeneral;