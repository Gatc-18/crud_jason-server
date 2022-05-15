import getData from "../helpers/getdata.js";
import ShowTable from "../modules/showTable.js";


const btn_create = document.getElementById('crear');
const btn_search = document.getElementById('buscar');
const btn_save = document.getElementById('guardar');
const form = document.querySelector('form');
const input_name = document.getElementById('name');
const input_email = document.getElementById('email');
const input_age = document.getElementById('age');
const container_table = document.querySelector('table');
const user_url = "http://localhost:4000/users";

// --------------- GET ---------
document.addEventListener('DOMContentLoaded', async () => {
    let info = await getData(user_url);
    ShowTable(info, container_table)
})




// --------------- POST ---------
btn_create.addEventListener('click', async (e) => {
    e.preventDefault();

    let res = await fetch(user_url, {
        method: 'POST',
        body: JSON.stringify({
            name: input_name.value,
            email: input_email.value,
            age: input_age.value,
            id: crypto.randomUUID()
        }),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
    let data = await res.json();
 


})


// --------------- GET BY EMAIL ---------
btn_search.addEventListener('click', async () => {
 
    if (input_email.value != '') {
        const [user] = await getData(`http://localhost:4000/users?email=${input_email.value}`);

        if (user) {
            showDataUser(user)
        } else {
            alert("No se encontró el usuario");

            form.reset();
        }


    } else {
        alert("Por favor ingresa información")
    }

})




// --------------- PUT ---------
btn_save.addEventListener('click', async () => {
    let id = localStorage.getItem('idEdit');
    let res = await fetch(`${user_url}/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: input_name.value,
                email: input_email.value,
                age: input_age.value
            }),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        let data = await res.json();
})

// --------------- DELETE ---------
document.addEventListener('click', async ({target}) => {

    if(target.classList.contains('delete')){
        let id = target.id;

        let res = await fetch(`${user_url}/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })

        let data = await res.json();

        
    }
})

document.addEventListener('click', async (e) => {
    e.preventDefault();

    if (e.target.classList.contains('edit')) {

        btn_save.removeAttribute('disabled');
        btn_create.setAttribute('disabled', true)

        let id = e.target.id;
        const user = await getData(`http://localhost:4000/users/${id}`);
        showDataUser(user);
        localStorage.setItem('idEdit', id);

    }
})


function showDataUser(infoUser = {}) {
    const { name, age, email } = infoUser;

    input_email.value = email;
    input_name.value = name;
    input_age.value = age;
}


