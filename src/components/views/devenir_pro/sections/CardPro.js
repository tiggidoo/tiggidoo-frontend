import React from 'react';
import { StarFill } from 'react-bootstrap-icons';

export default function CardPro($props){
    const {firstName, lastName, evaluation, prestation, urlImg, evaluationLabel, serviceLabel} = {...$props}
    //console.log($props);
    let urlImagen = "images/" + urlImg + ".png";
    return(
        <div className="DPBecomePro__pro d-flex flex-column justify-content-around align-items-center pt-5">
            <div className="DPBecomePro__img">
                <img src={urlImagen} alt="" />
            </div>
            <div className="DPBecomePro__names">
                <h4>{firstName}-{lastName}</h4>
            </div>
            <div className="DPBecomePro__evaluation d-flex flex-row justify-content-around align-items-center">
                <div className="DPBecomePro__evaluation--change  align-self-center">{evaluation}</div> 
                <div className="DPBecomePro__start align-self-start mx-2"><StarFill color="#2880fb" size={12} /></div>
                <div className="DPBecomePro__textEvalPres align-self-center"> - { evaluationLabel }</div>
            </div>
            <div className="DPBecomePro__presetation">
                <div className="DPBecomePro__presetation--change d-inline">{prestation}</div>
                <div className="DPBecomePro__textEvalPres d-inline"> - { serviceLabel }</div>
            </div>
        </div>
    );
}