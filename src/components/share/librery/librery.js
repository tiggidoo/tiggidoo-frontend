import config from '../../../config.json'


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


/**
 * @param {Float, Float, Boolean} Float format is: 165.3, 15 return: {tps: 9.02, tvq: 17.98, total: 207.30}
 */
 export const calculateTpsTvqAndTotal = (workPrice, vacuumPrice, isCalculateTax) => {
  let tps = 0.00
  let tvq = 0.00
  if(isCalculateTax !== null && isCalculateTax !== 0){
    tps = ((workPrice + vacuumPrice)*parseFloat(config.TPS, 10))/100
    tps = tps.toFixed(2)

    tvq = ((workPrice + vacuumPrice)*parseFloat(config.TVQ,10))/100
    tvq = tvq.toFixed(2)
  }

  let total = parseFloat(workPrice,10) + parseFloat(vacuumPrice,10) + parseFloat(tps,10) + parseFloat(tvq,10)
  total = total.toFixed(2)

  
  return {
      tps: tps,
      tvq: tvq,
      total: total
  }

}
