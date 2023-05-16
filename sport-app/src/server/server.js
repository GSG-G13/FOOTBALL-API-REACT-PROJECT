const Express = require('express');
const cors = require("cors")


const app = Express();

app.use(cors())
app.get('/', (req, res) => {
  
    fetch("https://api.football-data.org/v4/competitions/PD/scorers", {
  method: 'GET',
  headers: { 'X-Auth-Token': 'd656413c703549b1a95310a65ca21a65' }
})
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch(error => {
    console.error(error);

  });
})

app.listen(4000, () => {
    console.log('app is running on port 4000');
})