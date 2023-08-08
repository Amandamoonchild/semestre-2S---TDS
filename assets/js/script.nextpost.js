const posts = [];

function savePost() {
    const title = document.getElementById("title").value;
    const categories = document.getElementById("categories").value;
    const resume = document.getElementById("resume").value;
    const publisher = document.getElementById("publisher").value;
    const date = document.getElementById("date").value;

    if (title && categories && resume && publisher && date) {
        storePost(title, categories, resume, publisher, date);
        cleanFields();
        showPosts() ;
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
        date,
    };
    posts.push(post)
    console.log(post)
}

function showPosts() {
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
           <button onclick="deletePost(${index})">Excluir</button>
        </div>
        `;
    });

    document.getElementById("list").innerHTML = showContent;
}