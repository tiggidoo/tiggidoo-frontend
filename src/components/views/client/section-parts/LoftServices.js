import { Link } from 'react-router-dom'

import { withTranslation } from "react-i18next"

import { Box } from '@material-ui/core'


const LoftServices = ({ t }) => {

    return (
        <Box className="post_code__container">
            <p className="post_code__title mb-5">Hello LoftServices</p>

            
        </Box>
    )
}

export default withTranslation()(LoftServices)
