const posts = [];

function savePost(){
    const title = document.getElementById("title").value;
    const categories = document.getElementById("categories").value;
    const resume = document.getElementById("resume").value;
    const publisher = document.getElementById("publisher").value;
    const date = document.getElementById("date").value;

   if (title && categories && resume && publisher && date){
    storePost(title, categories, resume, publisher, date);
    cleanFields();
   } else {
    alert("preencha todos os campos!");
   }

    
}

function cleanFields(){
    document.getElementById("title").value = "";
    document.getElementById("categories").value = "";
    document.getElementById("resume").value = ""
    document.getElementById("publisher").value = "";
    document.getElementById("date").value = "";
}

function storePost(title, categories, resume, publisher, date){
    const post = {
        title,
        categories,
        resume ,
        publisher,
        date,
    };
    posts.push(post)
    console.log(post)
}
