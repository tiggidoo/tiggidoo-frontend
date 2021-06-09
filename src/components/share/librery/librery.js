
export const deletePhoneMask = (phoneMasked, dialCode) => {
    let phone = phoneMasked.replace('(', '');
    phone = phone.replace(')', '');
    phone = phone.replace('-', '');
    phone = phone.replace(' ', '');
    phone = phone.replace(`+${dialCode}`, '');
    phone = phone.replace(/\s+/g, '');
    phone = phone.trim();

    return phone;
}


/**
 * 
 * @param {Date} ra The format is: 2021-08-01 00:00:00
 */
 export const formateDateSlashes = (ra) => {

    let today = new Date(ra);
    let year = today.getFullYear();
    let month = ((today.getMonth() + 1) < 10) ? "0" + (today.getMonth() + 1) : today.getMonth() + 1;
    let day = (today.getDate() < 10) ? "0" + today.getDate() : today.getDate();
    let formDate = day + "/" + month + "/" + year;
  
    return formDate;
  }
  

/**
 * 
 * @param {Date} date The format is: 2021-03-27T02:18:23.000000Z return: 31 May 2021
 */
export const getDateFormatDayMotnYear = (date) => {

  let customeDate = new Date(date)
  customeDate = customeDate.toString().split(' ')
  customeDate = `${customeDate[2]} ${customeDate[1]} ${customeDate[3]}`

  return customeDate;
}
