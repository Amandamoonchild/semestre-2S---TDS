// Uma categoria possui város produtos, relação 1:N
class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.products = [];
    }
}

class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class CategoryService {
    constructor() {
        this.categories = [];
        this.nextCategoryId = 0;
    }

    addCategory(name) {
        const id = this.nextCategoryId++
        const category = new Category(id, name);
        this.categories.push(category);
    }
}

class ProductServie{
    constructor(){
        this.products = [];
        this.nextProductID = 0;
    }

    addProduct(name, price, category){
        const id = this.nextProductID++;
        const Product = new(id, name, price, category)
        this.products.push(product);
    }
}

const categoryList = new CategoryService();

function createCategory(){
    const categoryName = "Doce";

    categoryList.addCategory(categoryName);

    console.log(categoryList.categories);
}