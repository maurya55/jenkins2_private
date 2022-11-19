const express =require('express');
const app=express();

const port=3000;


app.get('/shopping',(req,res)=>{

    return res.status(200).json({
        router:"shopping"
    })

})



app.listen(port,()=>{
    console.log(`shopping code running on ${port} `);
})