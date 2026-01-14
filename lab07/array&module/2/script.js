let users;
let paragraph=document.createElement("p");
(async function fetchUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        users = await response.json();

        for (const user of users) {
            let button = document.createElement("button");
             button.innerText = user.name;
            button.style.margin = "5px";
             button.setAttribute("user-id", user.id);
             button.addEventListener("click", function() {
                    const id=this.getAttribute("user-id");
                    fetchPostsByUserId(id);
             });

            document.body.appendChild(button);
        }
        document.body.appendChild(paragraph);
    } catch (error) {
        console.error("failed to fetch users");
    }
})();       


async function fetchPostsByUserId(userId) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        let posts = await response.json();
        //   console.log(posts);
        paragraph.innerHTML = `<h3>Posts by User ID ${userId}:</h3>`;
        posts.forEach(post => {
            let postDiv = document.createElement("div");
            postDiv.style.border = "1px solid black";
            postDiv.style.margin = "5px";
            postDiv.style.padding = "5px";
            postDiv.innerHTML = `<h4>${post.title}</h4><p>${post.body}</p>`;
            paragraph.appendChild(postDiv);
        });

    } catch (error) {
        console.error(`failed to fetch posts for user `,);
    } 
};



// function fetchUsers() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(response => {
//             if (!response.ok) {
//                console.log("network response was not ok");
//             }
//             return response.json();
//         })
//         .then(users => {
//             users.forEach(user => {
//                 let button = document.createElement("button");
//                 button.innerText = user.name;
//                 button.style.margin = "5px";
//                 button.setAttribute("user-id", user.id);   
//                 button.addEventListener("click", function() {
//                     const id = this.getAttribute("user-id");
//                     fetchPostsByUserId(id);
//                 });
//                 document.body.appendChild(button);
//             });
//         })
//         .catch(error => {
//             console.error("failed to fetch users", error);
//         });
// }

// fetchUsers();