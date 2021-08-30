import Express from 'express';
import Cors from 'cors';
const App = Express();
App.use(Cors());
const port = process.env.PORT || 8080;

App.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
