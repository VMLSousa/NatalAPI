const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./demo.db',sqlite.OPEN_READWRITE,(err)=>
{if(err) return console.error(err);}
);

// const sql = 'CREATE TABLE quote(ID INTEGER PRIMARY KEY, movie, quote, character)';

const sql = 'CREATE TABLE user(id INTEGER PRIMARY KEY, nome STRING, alvo STRING, familia INTEGER)';

db.run(sql);