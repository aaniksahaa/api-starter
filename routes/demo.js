const express = require('express');
const router = express.Router();
const { getDemo } = require('../controllers/demo')

router.get('/', async (req,res,next) => {
    try{
        getDemo(req.query)
        res.send(data)
    }
    catch(err){
        console.log(err)
    }
})

module.exports = router;