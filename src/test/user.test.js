const chai = require('chai');
const MOCK_URL = process.env.MOCK_URL;
const server = require('../../index');
const expect = chai.expect;
const should = chai.should();
const User = require('../models/user.model');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('User routes:', () => {

    it('GET api/user', (done) => {
        chai.request(server)
        .get('/api/user')
        .end((err, res) => {
            if(err) {
                console.log('There was an error in route: api/user');
                done();
            }

            if(res){
                expect(res.body.users).length.above(0);
                done();
            }
        })
    })

    it('GET api/user/:id', (done) => {
        chai.request(server)
        .get('/api/user/' + 3)
        .end((err, res) => {
            if(err) {
                console.log('There was an error in route: api/user/:id');
                done();
            }

            if(res){
                expect(res.body).not.to.have.property('errorCode');
                expect(res.body).to.have.property('id');
                expect(res.body).to.have.property('username');
                expect(res.body).to.have.property('email');
                done();
            }
        })
    })

    it('POST api/user', (done) => {
        let body = {
            username: 'example',
            email: 'some-example@gmail.com',
        }

        chai.request(server)
        .post('/api/user')
        .send(body)
        .end((err, res) => {
            if(err){
                console.log('Something went wrong creating new user.');
                console.log(err);
                done();
            }

            if(res){
                expect(res.body).not.to.have.property('errorCode');
                done();
            }
        })
    })

})






    