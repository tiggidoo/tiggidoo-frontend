export default function validateInfo (values) {
    let errors = {}

    if (!values.postCode.trim()) {
        errors.postCode = "Post code is required"
    }

    return errors;
}