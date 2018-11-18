import * as moment from 'moment';


// ===== GENERAL OVERVIEW
const DataToGeneral = (data) => {
    let cardsLists = [];

    if (data.board) {
        cardsLists = data.board.lists;
    } else if (data.data) {
        cardsLists = data.data.lists;
    }


    const generalInfo = {};

    let cardsCpt = 0;
    let cardsCompletedCpt = 0;
    let firstCreation;
    let lastCreation;

    cardsLists.forEach((l) => {
        cardsCpt += l.cards.length;
        l.cards.forEach((c) => {
            if (c.isArchived) { cardsCompletedCpt++; }

            const cardDate = moment(c.createdAt);
            if (firstCreation === undefined && cardDate) { firstCreation = cardDate; } else if (lastCreation === undefined && cardDate) { lastCreation = cardDate; } else if (cardDate && cardDate.isBefore(firstCreation)) { firstCreation = cardDate; } else if (cardDate && cardDate.isAfter(lastCreation)) { lastCreation = cardDate; }
        });
    });

    generalInfo.listsNumber = cardsLists.length;
    generalInfo.cardsNumber = cardsCpt;
    generalInfo.checklistsCompleted = Math.floor(cardsCompletedCpt / cardsCpt * 100);
    if (firstCreation) {
        generalInfo.firstCardCreated = firstCreation.format('hh:mm DD/MM/YYYY');
    }
    if (lastCreation) {
        generalInfo.lastCardCreated = lastCreation.format('hh:mm DD/MM/YYYY');
    }


    let membersLength;
    if (data.board) {
        membersLength = data.board.members.length;
    } else membersLength = data.data.members.length;


    generalInfo.membersNumber = membersLength;

    return generalInfo;
};

export default DataToGeneral;
