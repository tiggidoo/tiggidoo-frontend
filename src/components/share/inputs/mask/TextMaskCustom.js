import React from 'react';
import MaskedInput from 'react-text-mask';

export const MaskTelephone = (props) => {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
        {...other}
        ref={(ref) => {
            inputRef(ref ? ref.inputElement : null);
        }}
        mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        placeholderChar={'\u2000'}
        />
    );
}

export const EveryThing = (props) => {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
        {...other}
        ref={(ref) => {
            inputRef(null);
        }}
    mask={[/[1-9]/]}
        />
    );
}