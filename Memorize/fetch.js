function peticiones(){
    var datos;
    fetch('https://breakingbadapi.com/api/quotes/1')
    .then(resp => resp.json())
    .then(data =>{
     datos = data;
})
return datos;
}
export default peticiones;