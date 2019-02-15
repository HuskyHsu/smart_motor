// const host = 'http://127.0.0.1:5000';
const host = 'https://script.google.com/macros/s/AKfycbxXEy2KKlm-bf6oW83Zxk7CayhZUmMIeZ4StaT88WrpD5gAjcM/exec';

const get = function(data_type, param){

    const param_str = Object.keys(param).map(key => `${key}=${param[key]}`).join('&');
    return fetch(`${host}?data_type=${data_type}&${param_str}`)
    .then(d => d.json());

}

export default get