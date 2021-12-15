import app from './app';
require('dotenv').config();

const port = process.env.PORT;
const main = async () => {
  await app.listen(port, () => {
    console.log(`Server on Port ${port}`);
  });
};

main();
