import React, { useState } from 'react'
import { Box} from '@material-ui/core'
import SelectInput from '../../../../share/inputs/SelectInput';
import moment from 'moment'
import config from '../../../../../config.json'

const ScheduledActivities = () => {

    //const [selectedDate, setSelectedDate] = useState(moment());
    const [selectedPeriod, setSelectedPeriod] = useState('')
    const [displayActivities, setDisplayActivities] = useState([])


    const handleChange = (e) => {

        const year = parseInt(e.target.value.split('_')[1])
        const month = parseInt(e.target.value.split('_')[0]) - 1

        const d = moment([year, month])

        const a = [];
        const startDay = moment(d).startOf('month')
        const endDay = moment(d).endOf('month')

        const _date = startDay.clone().subtract(1, "day");
        
        let week=0;
        while (_date.isBefore(endDay, "day")) {
            
            let day = _date.add(1, "day").clone()
            if(a[week] === undefined){
                a[week] = []
                a[week][day.day() === 0 ? 7 : day.day()] = day.date()
            }else{
                a[week][day.day() === 0 ? 7 : day.day()] = day.date()
            }
            if(day.day() === 0 ){
                week++
            }
        }        
        setDisplayActivities(a);
        setSelectedPeriod(e.target.value);
        
    };

    let etatCandidate = [
        { id: '01_2021', name: 'January 2021' },
        { id: '02_2021', name: 'February 2021' },
        { id: '03_2021', name: 'March 2021' },
        { id: '04_2021', name: 'April 2021' },
        { id: '05_2021', name: 'May 2021' },
        { id: '06_2021', name: 'June 2021' },
        { id: '07_2021', name: 'July 2021' },
        { id: '08_2021', name: 'August 2021' },
        { id: '09_2021', name: 'September 2021' },
        { id: '10_2021', name: 'October 2021' },
        { id: '11_2021', name: 'November 2021' },
        { id: '12_2021', name: 'December 2021' },
        { id: '01_2022', name: 'January 2022' },
    ];

    const buildHtml = (weeks) => {
        let html = [];
        for(let index in weeks){
            let week = weeks[index];
            let htmlWeek = []
            for(let i=1; i<=7; i++){
                let htmlDay = []
                if(week[i]){
                    htmlDay.push(
                        <Box>
                            <Box key={i} style={{color: '#6d6d6d', fontWeight: 'bold', fontSize: '15px', lineHeight: '1.5'}} >{ week[i] < 10 ? `0${week[i]}` : week[i] }</Box>
                            <Box style={{width: '55px', height: '10px', backgroundColor:'#32cc8c', border: '1px solid #000', marginBottom: '5px'}}></Box>
                            <Box style={{width: '55px', height: '10px', backgroundColor:'#32cc8c', border: '1px solid #000'}}></Box>
                        </Box>
                    )
                }else{
                    htmlDay.push(<Box key={i}>
                        <Box style={{width: '55px', height: '10px', backgroundColor:'transparent', border: '0px solid'}}></Box>
                    </Box>)
                }
                htmlWeek.push(
                    
                        <Box mb={1} mr={1} key={config['DAYS'][i] + weeks[index]} display="flex" flexDirection="column" style={{maxWidth: '70px', width: '100%' }}>
                            <Box style={{color: '#6d6d6d', fontWeight: 'bold', fontSize: '12px', lineHeight: '1'}}>
                                { config['DAYS'][i] }
                            </Box>
                            <Box>
                                { htmlDay }
                            </Box>
                        </Box>
                    
                )
            }
            html.push(
                <Box display="flex" flexDirection="row">
                    <Box style={{color: '#2880fb', fontSize: '9px', fontWeight: 'bold'}} mr={1} mb={1} alignSelf="flex-end">
                        <Box>AM</Box>
                        <Box>PM</Box>
                    </Box>
                    <Box>
                        <Box key={weeks[index]} display="flex" flexDirection="row">{ htmlWeek }</Box>
                    </Box>
                </Box>
            )
        }
        return html;
    }

    return (
        <Box ml={5}>
            <Box mb={3}>
                <SelectInput
                    id="selectedPeriod"
                    name="selectedPeriod"
                    width="40%"
                    data={etatCandidate}
                    onChange={(e) => handleChange(e)}
                    defaultValue={selectedPeriod}
                    disabled={true}
                />                
            </Box>

            <Box>
                {
                    buildHtml(displayActivities)
                }
            </Box>
        </Box>
    )
}

export default ScheduledActivities