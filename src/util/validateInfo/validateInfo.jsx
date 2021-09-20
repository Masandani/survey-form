const validateInfo =(values) => {
    
    let errors = {}

    if (!values.firstname.trim()) {
        errors.firstname = "Firstname Required"
    }
    if (!values.lastname.trim()) {
        errors.lastname = "Lastname Required"
    }
    //Email
    if (!values.email) {
        errors.email = "Email Required"

    } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.email)) {
        errors.email = "Email address is invalid"
    }

    return errors;

};

export default validateInfo;

