import { Router } from "express";
import {  selectUsers, selectUser, insertUser, updateUser, deleteUser } from './Controler/User.js';

const router = Router();

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "API ONLINE"
    })
})

router.get('/Users', selectUsers);
router.get('/User', selectUser);
router.post('/User', insertUser);
router.put('/User', updateUser);
router.delete('/User', deleteUser);

export default router;