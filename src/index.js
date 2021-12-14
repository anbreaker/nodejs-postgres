import app from './app';

const port = 3000;

const main = async () => {
  await app.listen(port, () => {
    console.log(`Server on Port ${port}`);
  });
};

main();
