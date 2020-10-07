import React from 'react';

export default function CardPro($props){
    const {firstName, lastName, evaluation, prestation, urlImg} = {...$props}
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
            <div className="DPBecomePro__evaluation">
                <div className="DPBecomePro__evaluation--change d-inline">{evaluation}</div> - Éval moyenne
            </div>
            <div className="DPBecomePro__presetation">
                <div className="DPBecomePro__presetation--change d-inline">{prestation}</div> - Prestation(s)
            </div>
        </div>
    );
}