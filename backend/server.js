import http from 'http';
import app from './app.js';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();

app.use(cors());  //for now i am letting all endpoints to request acces but at the time of depploying i will change to frontend specific url

const server = http.createServer(app);
const PORT = process.env.PORT || 4000;

server.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
});