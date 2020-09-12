import bodyParser from 'body-parser';

export default function bodyParse(app) {
  app.use(bodyParse.urlencoded({ extended: false }));
}
