import getData from "../helpers/getdata.js";
import ShowCard from "../modules/showCard.js";


const btn_marvel = document.getElementById('marvel');
const btn_dc = document.getElementById('dc');
const containerC = document.getElementById('container_cards');
const url_marvel = "http://localhost:4000/marvel";
const url_dc = "http://localhost:4000/dc";
const url_users = "http://localhost:4000/users"

btn_marvel.addEventListener('click', async() => {
   let data_marvel = await getData(url_marvel); 
   ShowCard(data_marvel, containerC );
})

btn_dc.addEventListener('click', async () => {
   let data_dc = await getData(url_dc);
   ShowCard(data_dc, containerC);
})