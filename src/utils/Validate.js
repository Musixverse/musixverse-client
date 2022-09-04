/**
 * @dev regex method validations, status to be checked and error/success box to be shown
 * @returns validation status & display message
 */

export function emailIsValid(email){
    const emailRegex = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!emailRegex.test(email)){
        return {
            status: false, 
            message: "Please enter a valid email"
        };
    }
    return {
        status: true, 
        message: ""
    };
}

export function usernameIsValid(username){
    const usernameRegex = /^\w+$/;
    if (username.length < 2){
        return {
            status: false, 
            message: "Username length should be greater than 1"
        };
    }
    else if (!usernameRegex.test(username)) {
        return {
            status: false, 
            message:"Username can only contain alphabets, numbers, and '_'"
        };
    }
    return {status: true, message: ""};
}

export function nameIsValid(name){
    if(name.trim().length === 0)
        return {status: false, message: "Name field can't be empty"};
    return {status: true, message: ""};
}