import express from 'express';
import { json } from 'body-parser';

import { currentUserRouter } from './routes/currentuser';
import { signInRouter } from './routes/signin';
import { signOutRouter } from './routes/signout';
import { signUpRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.use(json());
app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);
app.use(errorHandler);

app.all('*', async (req, res, next) => {
    next(new NotFoundError('Route not found'));
});

app.listen(3000, () => {
    console.log("Listening on port 3000!!!")
})