const posts = [];
let postIndex = -1;

function savePost() {
    const title = document.getElementById("title").value;
    const categories = document.getElementById("categories").value;
    const resume = document.getElementById("resume").value;
    const publisher = document.getElementById("publisher").value;
    const date = document.getElementById("date").value;

    if (title && categories && resume && publisher && date) {
        if (postIndex == -1) {
            storePost(title, categories, resume, publisher, date);
            cleanFields();
            showPosts();
        }
        else {
            posts[postIndex] = {
                title,
                categories,
                resume,
                publisher,
                date
            };
        }
        cleanFields();
        showPosts();
        postIndex = -1;
    } else {
        alert("preencha todos os campos!");
    }

}

function cleanFields() {
    document.getElementById("title").value = "";
    document.getElementById("categories").value = "";
    document.getElementById("resume").value = ""
    document.getElementById("publisher").value = "";
    document.getElementById("date").value = "";
}

function storePost(title, categories, resume, publisher, date) {
    const post = {
        title,
        categories,
        resume,
        publisher,
        date
    };
    posts.push(post)
    console.log(post)
}

function showPosts() {
    document.getElementById("list").classList.remove("hidden");
    let showContent = "";

    posts.forEach((post, index) => {
        showContent += `
        <div class="itemPost">
            <h2>${post.title}</h2>
           <p><strong> Categoria: </strong> ${post.categories}</p>
           <p><strong> Resumo: </strong> ${post.resume}</p>
           <p><strong> Autor: </strong> ${post.publisher}</p>
           <p><strong> Data: </strong> ${post.date}</p>

           <button onclick="editPost(${index})">Editar</button>
           <button onclick="removePost(${index})">Excluir</button>
        </div>
        `;
    });

    document.getElementById("list").innerHTML = showContent;
}

function editPost(index) {
    console.log("hello world")
    const post = posts[index];

    document.getElementById("title").value = post.title;
    document.getElementById("categories").value = post.categories;
    document.getElementById("resume").value = post.resume;
    document.getElementById("publisher").value = post.publisher;
    document.getElementById("date").value = post.date;

    postIndex = index;
}

function removePost(index){
    posts.splice(index, 1);
    showPosts();

    if (posts.length == 0){
        document.getElementById("list").classList.add("hidden");
    }
}