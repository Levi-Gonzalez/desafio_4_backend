const ERROR = {error: "¡Producto no encontrado!"}

class Container {
    constructor (){
        this.products = [];
    }

    getAll(){
        return this.products
    }

    getById (id){
        const obj = this.products.find((product) =>  product.id ===id);
        if (obj){
            return obj
        }
        else {
            return ERROR
        }
    }
    create(obj){
        const array0fIds = this.products.map((product) => product.id);
        const maxId = Math.max(... array0fIds);
        const id = maxId + 1;
        const new0bj = {id, ...obj};
        this.products.push(new0bj)
        return new0bj
    }

    updateById(id, obj){
        return true
    }
    deleteById (id){
        return true;
    }

    
}
module.exports = Container