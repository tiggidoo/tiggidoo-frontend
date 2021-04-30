import React from 'react'
import { Box} from '@material-ui/core'
import SelectInput from '../../../../share/inputs/SelectInput';
//import moment from 'moment'

const ScheduledActivities = () => {

    const handleChange = (e) => {
        
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
    ];
    
    return (
        <Box>
            <Box>
                <SelectInput
                    id="statusId"
                    name="statusId"
                    width="40%"
                    data={etatCandidate}
                    onChange={(e) => handleChange(e)}
                    defaultValue={''}
                    disabled={true}
                />                
            </Box>
        </Box>
    )
}

export default ScheduledActivities