import express from 'express';
import config from 'config';
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes"
import cors from 'cors'

const port=config.get<number>('port')
const app=express()
app.use(cors({
    origin:"http://localhost:3000"
}));
app.use(express.json())



app.listen(port,()=>{
    logger.info(`App is running at http://localhost:${port}`)
    connect();
    routes(app);
})