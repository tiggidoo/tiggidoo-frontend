import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { useTranslation } from "react-i18next";
import { useLocation } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));



export default function HorizontalLinearStepper() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    function getSteps() {
        if (lang === 'en') return ['Location', 'Home', 'Service', 'Confirmation'];

        if (lang === 'fr') return ['LOCALISATION', 'LOGEMENT', 'PRESTATION', 'VALIDATION'];
    }

    const classes = useStyles();
    const steps = getSteps();
    const location = useLocation()

    return (
        <div className={classes.root}>
            <Stepper >
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};

                    if (index === 0) {
                        stepProps.completed = true;
                    }

                    if (location.pathname === '/housing') {
                        if (index === 1) {
                            stepProps.active = true;
                        }
                    } else if (location.pathname === '/benefit') {
                        if (index === 1) {
                            stepProps.completed = true;
                        }
                        if (index === 2) {
                            stepProps.active = true;
                        }
                    } else if (location.pathname === '/validation') {
                        if (index === 1) {
                            stepProps.completed = true;
                        }
                        if (index === 2) {
                            stepProps.completed = true;
                        }
                        if (index === 3) {
                            stepProps.active = true;
                        }
                    }

                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </div>
    );
}
