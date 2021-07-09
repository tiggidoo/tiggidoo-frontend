import moment from "moment";
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

export const functionHour = (scheduleActivities, chosenDate) => {
  
  let serviceHour = ["08:00","08:30","09:00","09:30","10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"]

  for(let index in scheduleActivities){
    const hourEndActivity = scheduleActivities[index].pro_finish_time.toString().substring(0, 2)
    const minuteEndActivity = scheduleActivities[index].pro_finish_time.toString().substring(2, 4)
    const startActivity = scheduleActivities[index].pro_start_time
    const endActivity = `${hourEndActivity}:${minuteEndActivity}:00`
    
    const unixStartActivity = moment(`${chosenDate}T${startActivity}`).unix() * 1000;
    const unixEndActivity = moment(`${chosenDate}T${endActivity}`).unix() * 1000;

    for (let i = unixStartActivity; i <= unixEndActivity; i += (30 * 60000)) {

      let hour = moment(i).hours()
      hour = hour < 10 ? `0${hour.toString()}`: hour.toString()

      let minutes = moment(i).minutes()
      minutes = minutes < 10 ? `0${minutes.toString()}`: minutes.toString()

      let t = `${hour}:${minutes}`

      if(serviceHour.indexOf(t) > -1){
        serviceHour = serviceHour.filter(row => row !== t)
      }
    }
  }

  const returnServiceHour = []
  for(let i = 0; i<serviceHour.length; i++){
     returnServiceHour.push({ id: `${serviceHour[i]}:00`, name: serviceHour[i].replace(':', 'H') } )
  }

  return returnServiceHour

}