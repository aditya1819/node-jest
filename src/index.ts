import express, { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';

// import router
import UserRoutes from './routes/UserRoutes';

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT: number = 3000;

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Req recesived on home page' });
});

app.use('/api', UserRoutes);

app.listen(PORT, () => {
  console.log(`App running on port👉 : 3000`);
});
