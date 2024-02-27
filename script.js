try {
    const userDAta = document.getElementById("userData");
    const fetchButton = document.getElementById("fetchButton");
    async function getData() {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        let tableHtml = `<table>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
            </tr>`;
        data.forEach((user)=> {
            tableHtml += `<tr>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.website}</td>
            </tr>`;
        });
        tableHtml += `</table>`;
        userDAta.innerHTML = tableHtml;
        userDAta.style.display = "block";
    }
} catch (error) {
    console.error("Error data:", error);
}