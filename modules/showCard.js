const ShowCard = (data = [], container) => {
    container.innerHTML = '';
    data.forEach(item => {
        
        const { nombre, imagen, id } = item;
        container.innerHTML += `
        
        <div  id=${id} class="card d-inline-block" style="width: 18rem;">
        <img src=${imagen} class="card-img-top" alt="...">
        <div class="card-body">
          <a href="#" class="btn d-block btn-primary">${nombre}</a>
        </div>
      </div>
        `
    })

}

export default ShowCard;