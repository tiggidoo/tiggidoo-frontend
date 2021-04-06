
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