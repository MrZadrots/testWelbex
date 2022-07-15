const promise = require('bluebird'); // best promise library today
const pgPromise = require('pg-promise'); // pg-promise core library
const config= require('config')
const {dataTable} = require('./repos');

const initOptions = {
    promiseLib: promise,
    extend(obj, dc){
        obj.dataTable = new dataTable(obj,pgp)
    }
}

const pgp = pgPromise(initOptions)
const db = pgp(config.get('dbUri'))

module.exports = {db,pgp}

