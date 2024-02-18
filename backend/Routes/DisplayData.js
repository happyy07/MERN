const express = require("express");
const router = express.Router();

router.post('/foodData', (req, res) => {
    try{
        res.send([global.food_items, global.food_Category]);
    }catch(error){
        console.log("Food data error=>", error);
        res.send("Server Error");
    }
})

module.exports = router;