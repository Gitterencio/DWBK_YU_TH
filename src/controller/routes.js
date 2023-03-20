const express= require('express');
const router = express.Router();

router.get('/',(req,res)=>{

    res.render('index.html',{
        hola : 'Hola mundo',
    })
})

router.get('/get',(req,res)=>{

    res.send({mensaje:'hola desde el backend (GET)'})
})

router.post('/post',(req,res)=>{
    const {mensaje} = req.body
    res.send({mensaje:mensaje + ' -->BACKEND (POST)'})
})
module.exports = router;