const getData = async (url = "http://localhost:4000/dc") => {

    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    } catch (error) {
        alert("Hubo un error")
    }

}


export default getData;
