import Auth from "./Auth";


export const  getPathPrefix = function (props) {
        const { location } = props;
        return  location.pathname.split( '/' )[1]
}


export const  getValueByKey = function (array,key) {
    let obj ={}
    if (array && array.length > 0)
        obj = array.find(obj => obj.key === key);

    return obj && obj.value ? obj.value : ""

};

export const  getObjectByKey = function (array,key) {
    let obj ={}
    if (array && array.length > 0)
        obj = array.find(obj => obj.key === key);

    return obj

};

export const  getSafeValues = function () {

    if (arguments.length < 2)
        return null;

    let object = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        try {
            object = object[arguments[i]];
        } catch (e) {
            return null;
        }
    }
    return object;

};

export const getImageExtension = function (image) {
    if (image && image.name)
        if(image.name.split('.') && image.name.split('.').length > 0)
            return image.name.split('.').pop()

    return  "jpeg"

};

export const isAllowedModules = function (validSubscriptionList,key) {
    let allowedModules = getSafeValues(validSubscriptionList,'allowedModules')
    if(Array.isArray(allowedModules) && allowedModules.indexOf(key) > -1)
        return true;

    return  false
};

export const isAllowedSubmenu = function (allowedRoles) {
    console.log(Auth.getRoles())
    const userRoles = Auth.getRoles()
    const found = allowedRoles.some(role=> userRoles.indexOf(role) >= 0)
    return found
};