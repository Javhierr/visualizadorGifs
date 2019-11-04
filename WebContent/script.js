var tablaGifs =  document.getElementById("tabla-gifs");
//window.onload = cargarGifs;

function cargarGifs() {	
	let request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			
			crearGifs(this.responseText);
		}
	};
	request.open("GET", "gifs.json", true);
	request.send();
}

function buscarGifs(event){
	let txtBusqueda = document.getElementById("txtBusqueda");
	let valor = txtBusqueda.value;
	
	cargarGifsGiphy(valor);
}

function cargarGifsGiphy(query){
	let request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			
			crearGifsGiphy(this.responseText);
		}
	};
	let url = "https://api.giphy.com/v1/gifs/search?api_key=C7Ik65kNTyYnsitAWqSV267QSEGISCqy&q="+query;
	request.open("GET", url, true);
	request.send();
}


0
function crearGifsGiphy(data){
	let respuestaGiphy = JSON.parse(data);
	for(let i = 0; i < respuestaGiphy.data.length; i++){
		let image = respuestaGiphy.data[i];
		crearElementoImg(image.images.original);
	}
	
}

0
function crearGifs(data) {
	let listaGifs = JSON.parse(data);
	for(let i = 0; i< listaGifs.length; i++){
		let gif = listaGifs[i];
		crearElementoImg(gif);
	}
}

function crearElementoImg(gif) {
	let contImg = document.createElement("div");
	let img = document.createElement("img");
	img.src = gif.url;
	contImg.appendChild(img);
	tablaGifs.appendChild(contImg);
}