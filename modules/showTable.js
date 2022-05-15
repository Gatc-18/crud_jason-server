const ShowTable = (data = [], container) => {
      
    container.innerHTML = `
    <tr>
    <th>ID</th>
    <th>NAME</th>
    <th>EMAIL</th>
    <th>AGE</th>
    <th>OPTIONS</th>
</tr>
    `

    data.forEach((info) => {
        const { id, name, email, age } = info;

        container.innerHTML += `
        <tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${age}</td>
        <td><button id=${id} class="btn edit btn-warning mx-1">edit</button><button id=${id} class="btn delete btn-danger mx-1">delete</button></td>
    </tr>
        `
    })

}

export default ShowTable;