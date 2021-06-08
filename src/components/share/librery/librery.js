
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
  