import React, { useEffect, useState } from 'react'
import { Box, makeStyles} from '@material-ui/core'
import SelectInput from '../../../../share/inputs/SelectInput';
import moment from 'moment'
import config from '../../../../../config.json'


const useStyle = makeStyles((theme) => ({
    numberStyle: {
        color: '#6d6d6d', 
        fontWeight: 'bold', 
        fontSize: '15px', 
        lineHeight: '1.5'
    },
    transparentBar: {
        width: '55px', 
        height: '10px', 
        backgroundColor:'transparent', 
        border: '0px solid',
        '@media(max-width: 600px)':{
            width: '35px', 
        },
        '@media(max-width: 374px)':{
            width: '30px', 
        }
    },
    dayArea: {
        display: 'flex', 
        flexDirection:'column',
        maxWidth: '70px', 
        width: '100%',
        margin: theme.spacing(0, 1, 1, 0)
    },
    dayAread: {
        color: '#6d6d6d', 
        fontWeight: 'bold', 
        fontSize: '12px', 
        lineHeight: '1'
    },
    ampmStyle: {
        color: '#2880fb', 
        fontSize: '9px', 
        fontWeight: 'bold'
    },
    selectInput:{
        margin: theme.spacing(0,0,2,2),
        '@media(max-width: 600px)': {
            margin: theme.spacing(5,0,3,0),
        },
        '& .MuiInputBase-root':{
            width: '60%',
            '@media(max-width: 600px)': {
                width: '100%',
            }
        }
    },
    bar:{
        width: '55px', 
        height: '10px', 
        backgroundColor: '#d3d2d3', //'#32cc8c', 
        border: '1px solid #b8b8b8',
        '@media(max-width: 600px)':{
            width: '35px', 
        },
        '@media(max-width: 374px)':{
            width: '30px', 
        }
    }, 
    white:{
        backgroundColor: '#fff'
    }
}))

const ScheduledActivities = ({ enableTime }) => {
    const classes = useStyle()

    const [selectedPeriod, setSelectedPeriod] = useState('')
    const [displayActivities, setDisplayActivities] = useState([])

    const displayMonthActivities = (d) => {

        const startDay = moment(d).startOf('month')
        const endDay = moment(d).endOf('month')

        const _date = startDay.clone().subtract(1, "day");
        
        let week=0;
        const a = [];
        
        while (_date.isBefore(endDay, "day")) {
            
            let day = _date.add(1, "day").clone()

            const getStringDay = (new Date(day)).toString().slice(0, 2)
            const arrayInfo = {
                    day: day.date(),
                    dayName: getStringDay
                }

            if(a[week] === undefined){
                a[week] = []
            }

            a[week][day.day() === 0 ? 7 : day.day()] = arrayInfo

            if(day.day() === 0 ){
                week++
            }
        }      
        
        return a
    }

    useEffect(() => {

        const date = new Date()
        const year = date.getFullYear()
        const month = date.getMonth()+1

        const d = moment([year, month])
        const res = displayMonthActivities(d)

        setDisplayActivities(res);
        setSelectedPeriod(`${month<10?'0'+month:month}_${year}`);

    },[])

    const handleChange = (e) => {
        const year = parseInt(e.target.value.split('_')[1])
        const month = parseInt(e.target.value.split('_')[0]) - 1

        const d = moment([year, month])
        const res = displayMonthActivities(d)
        setDisplayActivities(res);
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
                    let styleBarColorAm = classes.bar
                    if(enableTime[week[i].dayName] === 1 || enableTime[week[i].dayName] === 3){
                        styleBarColorAm = styleBarColorAm + ' ' + classes.white
                    }

                    let styleBarColorPm = classes.bar
                    if(enableTime[week[i].dayName] === 2 || enableTime[week[i].dayName] === 3){
                        styleBarColorPm = styleBarColorPm + ' ' + classes.white
                    }

                    htmlDay.push(
                        <Box key={i}>
                            <Box className={classes.numberStyle}>{ week[i].day < 10 ? `0${week[i].day}` : week[i].day }</Box>
                            <Box className={styleBarColorAm} style={{marginBottom: '5px'}}></Box>
                            <Box className={styleBarColorPm}></Box>
                        </Box>
                    )
                }else{
                    htmlDay.push(
                        <Box key={i}>
                            <Box className={classes.transparentBar}></Box>
                        </Box>
                    )
                }

                htmlWeek.push(                    
                        <Box className={classes.dayArea} key={config['DAYS'][i] + weeks[index].day} >
                            <Box className={classes.dayAread}>
                                { config['DAYS'][i] }
                            </Box>
                            <Box>
                                { htmlDay }
                            </Box>
                        </Box>                    
                )
            }

            html.push(
                <Box key={index} display="flex" flexDirection="row" >
                    <Box className={classes.ampmStyle} mr={1} mb={1} alignSelf="flex-end">
                        <Box>AM</Box>
                        <Box>PM</Box>
                    </Box>
                    <Box>
                        <Box key={weeks[index].day} display="flex" flexDirection="row">{ htmlWeek }</Box>
                    </Box>
                </Box>
            )
        }
        return html;
    }

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        
            <Box>
                <Box className={classes.selectInput} >
                    <SelectInput
                        id="selectedPeriod"
                        name="selectedPeriod"
                        data={etatCandidate}
                        onChange={(e) => handleChange(e)}
                        defaultValue={selectedPeriod}
                        disabled={true}
                    />                
                </Box>
                {
                    buildHtml(displayActivities)
                }
            </Box>
        </Box>
    )
}

export default ScheduledActivities