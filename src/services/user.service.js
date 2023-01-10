const MOCK_URL = process.env.MOCK_URL;
const axios = require('axios');
const https = require('https');

class UserService {
    constructor(){}

    /**
     * Get all items from User collection
     */
    async items(){
        try{
            const res = await this.getRequest();
            return res;
        }catch(err){
            return err;
        }
    }

    async getById(id){
        try{
            const res = await this.getRequest(id);
            return JSON.parse(res);
        }catch(err){
            return err;
        }
    }

    /**
     * Insert new User item to collection
     * @param {*} body Username & email
     * @returns 
     */
    async insert(body){
        try{
            const res = await this.postRequest(body);
            return res;
        }catch(err){
            return err;
        }
    }

    /**
     * Make a get request to mockapi
     * @returns 
     */
    async getRequest(id){
        return new Promise((resolve, _) => {
            if(!id){
                https.get(MOCK_URL, (res) => {
                    let data = '';
                    res.on('data', (chunck) => {
                        data += chunck;
                    })
        
                    res.on('end', () => {
                        data = JSON.parse(data);
                        resolve(data);
                    })
        
                    res.on('error', (err) => {
                        throw new Error(err);
                    })
                })
            }else{
                https.get(MOCK_URL+'/'+id, (res) => {
                    let data = '';
                    res.on('data', (chunck) => {
                        data += chunck;
                    })
        
                    res.on('end', () => {
                        resolve(data);
                    })
        
                    res.on('error', (err) => {
                        throw new Error(err);
                    })
                })
            }   
        })
    }

    /**
     * Create new User item
     * @returns An OK message if request was successfully.
     */
    async postRequest(body){
        axios
        .post(MOCK_URL, body)
        .then(res => {
            return 'OK'
        })
        .catch(err => {
            throw new Error(err);
        })
    }
}

module.exports = new UserService;