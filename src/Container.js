const ERROR = {error: "¡Producto no encontrado!"}

class Container {
    constructor (){
        this.products = [];
    }

    getAll(){
        return this.products
    }

    getById (id){
        const obj = this.products.find((product) =>  product.id === id);
        if (obj){
            return obj
        }
        else {
            return ERROR
        }
    } 
    create(obj){
        const array0fIds = this.products.map((product) => product.id);
        const maxId = array0fIds.length === 0 ? 0 : Math.max(... array0fIds);
        const id = maxId + 1;
        const new0bj = {id, ...obj};
        this.products.push(new0bj)
        return new0bj
    }

    updateById(id, obj){
        const foundObj = this.products.find((product) =>  product.id === id);
        if(foundObj){
            const filteredProducts = this.products.filter(
                (product) => product.id !== id
            );

            const new0bj = {id, ...obj}
            this.products = [...filteredProducts, new0bj]
            return new0bj;

        } else{
            return ERROR;
        }
    }
    deleteById (id){
    const products = products.filter(filterProduct => filterProduct.id !== Number(id))
    } 

    
}
module.exports = Container