import i18next from 'i18next';

export const findClosestDate = (day, date) => {
    let dateFound = false;

    date = new Date(date);

    while (!dateFound) {
        if (date.getDay() === day - 1) dateFound = true;
        else date.setDate(date.getDate() + 1);
    }

    return generateCurrentDateToString(date);
};

export const generateCurrentDateToString = (date = null) => {
    if (!date) date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

    return `${year}-${month}-${day}`;
};

export const startDateToTextualDate = (date) => {
    date = new Date(date);

    if (!date) date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const weekDay = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

    return `${i18next.t(`Client.FullDaysByNumber.${day}`)} ${weekDay} ${i18next.t(`Client.FullMonthsByNumber.${month}`)} ${year}`;
};
