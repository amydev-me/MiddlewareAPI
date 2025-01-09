import { json } from 'body-parser';  
import express from 'express';
import axios from 'axios';
const app = express();

app.use(json());   

const router = express.Router();

router.get('/test' ,(req, res) => {
    console.log('API_KEY', process.env.API_KEY,process.env.API_SECRET)
    axios.get(`${process.env.API_KEY}}/api/resource/Lead`, {
        headers: {
            "Authorization" : `token ${process.env.API_KEY}:${process.env.API_SECRET}`
        }
    }).then(({data}) => {
        res.send(data)
    }).catch(error => {
        // console.log(error);
    }) 
});

app.use(router);

app.listen(3000, () => {
    console.log('APP is starting....');
});