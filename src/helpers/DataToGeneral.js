import * as moment from 'moment';


// ===== GENERAL OVERVIEW
const DataToGeneral = (data) => {
    var cardsLists = [];
    
    if(data.board){
        cardsLists = data.board.lists;
    }
    else if(data.data){
        cardsLists = data.data.lists;
    }
    

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
            if(firstCreation === undefined && cardDate){ firstCreation = cardDate }
            else if(lastCreation === undefined && cardDate){ lastCreation = cardDate  }
            else if(cardDate && cardDate.isBefore(firstCreation)){ firstCreation = cardDate }
            else if(cardDate && cardDate.isAfter(lastCreation)){ lastCreation = cardDate }

        })
    });

    generalInfo.listsNumber = cardsLists.length;
    generalInfo.cardsNumber = cardsCpt;
    generalInfo.checklistsCompleted = Math.floor(cardsCompletedCpt / cardsCpt *100);
    if(firstCreation){
        generalInfo.firstCardCreated = firstCreation.format("hh:mm DD/MM/YYYY");
    }
    if(lastCreation){
        generalInfo.lastCardCreated = lastCreation.format("hh:mm DD/MM/YYYY");
    }
    

    var membersLength;
    if(data.board){
        membersLength = data.board.members.length
    }
    else membersLength = data.data.members.length


    generalInfo.membersNumber = membersLength;

    return generalInfo;
};

export default DataToGeneral;