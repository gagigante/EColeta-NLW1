<h1 align="center">
    <img alt="Ecoleta" title="#Ecoleta" src=".github/ecoleta.svg" width="250px" />
</h1>

<h4 align="center">
  Ecoleta
</h4>
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/gagigante/EColeta-NLW1">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/gagigante/EColeta-NLW1">
  
  <a href="https://github.com/gagigante/EColeta-NLW1/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/gagigante/EColeta-NLW1">
  </a>

  <a href="https://github.com/gagigante/EColeta-NLW1/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/gagigante/EColeta-NLW1">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">

<p align="center">
  <a href="#rocket-tecnologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#runner-how-to-run">How to run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

<br>

<p align="center">
  <img alt="Frontend" src=".github/ecoleta.png" width="100%">
</p>

## :rocket: Tecnologies

This project was developed with the following techs:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [Sqlite](https://www.sqlite.org/)


## 💻 Project

Ecoleta is a marketplace to help people to find garbage collection points efficiently.

## :runner: How to run

### BACKEND:

### So access the fold `server` and run:

To install dependencies
```
  $ yarn
  
  or

  $ npm install
```
To run the migrations
```
  $ yarn knex migrate:latest

  or

  $npm knex migrate:latest
```

### You need to update some files with your current IP address:

server/src/controllers/ItemsController.ts
```
  const serializedItems = items.map(item => {
    return {
      id: item.id,
      title: item.title ,
      image_url: `http://YOUR_IP_ADDRESS:3333/uploads/${item.image}`,
    };
  });
```

server/src/controllers/PointsController.ts
```
  const serializedPoints = points.map(point => {
    return {
      id: point.id,
      title: point.title ,
      image_url: `http://YOUR_IP_ADDRES:3333/uploads/${point.image}`,
    };
  });
```
```
  const serializedPoint = {
    ...point,
    image_url: `http://YOUR_IP_ADDRES:3333/uploads/${point.image}`,
  };

```
### So you can run the api:

To start de server
```
  $ yarn dev

  or

  $ npm dev
```

### WEB: 
### Just access the fold `web` and run:

To install dependencies
```
  $ yarn
  
  or

  $ npm install
```
To start de server
```
  $ yarn start

  or

  $ npm start
```

### MOBILE: 
### First you need to edit the file `api.js` with your current IP address. 

mobile/src/services/api.js
```
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://YOUR_IP_ADDRESS:3333',
});

export default api;
```

### So access the fold `mobile` and run:
To install dependencies
```
  $ yarn
  
  or

  $ npm install
```
To start de server
```
  $ yarn start

  or

  $ npm start
```

## 🤔 How to contribute

- Fork this repo;
- Create a branch for your new feature: `git checkout -b my-feature`;
- Commit your changes: `git commit -m 'feat: My brand new feature'`;
- Push it to your branch: `git push origin my-feature`.

After merge of your pull request, you can delete your branch.

## :memo: License

This project is under MIT license. See the file [LICENSE](LICENSE) for details.

---

[Visit my website!](https://www.ggportfolio.com.br)
