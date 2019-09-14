
export const validateData = (data) => {
    const {name, category, url} = data;
    if (!name) {return {isValidData:false, errorMessage:'You must introduce a name for the campaign'}}
    if (!category) {return {isValidData:false, errorMessage:'You must choose a category for the campaign'}}
    if (!url) {return {isValidData:false, errorMessage:'You must introduce an url for the campaign'}}
    if (name.lengt > 50) {return {isValidData:false, errorMessage:'The maximum length for the name for the campaign is 50 characters.'}}
    if (url.lengt > 250) {return {isValidData:false, errorMessage:'The maximum length for the url for the campaign is 250 characters.'}}
    if (!validURL(url)) {return {isValidData:false, errorMessage:'Make sure the url for the campaign is valid.'}}
    if (!validName(name)) {return {isValidData:false, errorMessage:'The name for the campaign must be alphanumeric.'}}
    return {isValidData:true, errorMessage:''}    
}

function validURL(url) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
      '((\\d{1,3}\\.){3}\\d{1,3}))'+
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
      '(\\?[;&a-z\\d%_.~+=-]*)?'+
      '(\\#[-a-z\\d_]*)?$','i');
    return !!pattern.test(url);
  }

 function validName(name) {
    const pattern = /^[A-Za-z0-9 ]+$/
    return pattern.test(name)
}