const {dataTable: sql} = require('../sql');

class dataTableRepository{
    constructor(db,pgp){
        this.db = db,
        this.pgp = pgp
    }

    async create(){
        return this.db.none(sql.create)
    }

    async init(){
        return this.db.map(sql.init, [], row => row.id);
    }

    async drop(){
        return this.db.none(sql.drop);
    }
}
module.exports = dataTableRepository;