function fetchData() {
    try {
      const userDAta = document.getElementById("userData");
      if (userDAta.style.display === "none") {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => {
            let tableHtml = `<table>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>`;
            data.forEach((user) => { 
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
         });
      } else {
      
        userDAta.style.display = "none";
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  document
    .getElementById("fetchButton")
    .addEventListener("click", fetchData);
  