import { json } from 'body-parser';  
import express from 'express';
import axios from 'axios';
const app = express();

app.use(json());   

const router = express.Router();

router.get('/test' ,async (req, res) => {
    

    const leadData = {
        lead_name: 'test',
        email_id: 'test@gmail.com',
        phone: '23424242',
        company_name: 'test'
    };

    try {
        const response = await axios.post(`${process.env.APP_URL}/api/resource/Lead`, leadData, {
            headers: {
                Authorization: `Token ${process.env.API_KEY}:${process.env.API_SECRET}`
            }
        });

        res.json({
            fulfillmentText: `Lead ${leadData.lead_name} has been successfully created in ERPNext!`
        });
    } catch (error) {
        console.error('Error creating lead:', error);
        res.json({
            fulfillmentText: `Failed to create the lead. Please check your data and try again.`
        });
    }
});

app.use(router);

app.listen(3000, () => {
    console.log('APP is starting....');
});