
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const url = 'https://api.millheat.com/share/applyAuthCode'

const options = {
    method: 'GET',
    headers:{
        'access_key': '316fd26e0c824676a1f241f88ab3a84c',
        'secret_token': 'd7877610550c4ab29f7e1b3b6c31574e'
    }
};
const getAuthorizationCode  = async () => {

    return fetch(url, options)
        .then(res => res.json())
        .then(json => json.data.authorization_code)
        .catch(err => console.error('error:' + err));
    /*try {

        let response = await fetch(url, options);

        response = await response.json();

        res.status(200).json(response);

        return(response.data.authorization_code)

    } catch (err) {
        console.log('error ' + err );
        res.status(500).json({msg: `Internal Server Error.`});

    }*/
};
exports.getAuthorizationCode = getAuthorizationCode
