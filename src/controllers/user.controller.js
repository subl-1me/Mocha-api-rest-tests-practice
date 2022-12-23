const MOCK_URL = process.env.MOCK_URL;
const https = require('https');

const items = async function(_, res){
    try{
        const requestResponse = await getRequest();
        return res.status(200).send({
            data: JSON.parse(requestResponse)
        })
    }catch(err){
        return res.status(500).send(err);
    }
}

const getRequest = function(){
    return new Promise((resolve, _) => {
        https.get(MOCK_URL, (res) => {
            let data = '';
            res.on('data', (chunck) => {
                data += chunck;
            })

            res.on('end', () => {
                console.log('Data has been obtained successfully.');
                resolve(data);
            })

            res.on('error', (err) => {
                throw new Error(err);
            })
        })
    })
}

module.exports = {
    items
}