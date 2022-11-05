import { openDb } from '../configDB.js';

export async function selectUsers(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM user')
        .then(users=>  res.json(users))
    });
}

export async function selectUser(req, res){
    let id = req.body.ID;
    openDb().then(db=>{
        db.get('SELECT * FROM user WHERE id=?', [ID])
        .then(user=> res.json(user) );
    });
}

export async function insertUser(req, res){
    let user = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO user (nome, alvo, familia) VALUES (?,?,?)', [user.nome, user.alvo, user.familia]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function updateUser(req, res){
    let user = req.body;
    openDb().then(db=>{
        db.run('UPDATE user SET nome=?, alvo=?, familia=? WHERE ID=?', [user.nome, user.alvo, user.familia, user.ID]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function deleteUser(req, res){
    let ID = req.body.ID;
    openDb().then(db=>{
        db.get('DELETE FROM user WHERE ID=?', [ID])
        .then(res=>res)
    });
    res.json({
        "statusCode": 200
    })
}