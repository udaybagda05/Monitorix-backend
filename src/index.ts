import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173'],
  })
);

app.use('/api/v1', );

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});