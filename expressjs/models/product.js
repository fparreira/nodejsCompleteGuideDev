// const products = [];
const fs = require('fs');
const path = require('path');

module.exports = class Product {
    constructor(t){
        this.title = t;
    }

    save(){
        // products.push(this);
        const p = path.join(
            path.dirname(require.main.filename),
            'data',
            'products.json'
        );

        fs.readFile(p, (err, fileContent) => {

            let products = [];

            if(!err){
                products = JSON.parse(fileContent);
                console.log(products);
            }

            products.push(this);
            console.log(this);

            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
            
        });

    }

    static fetchAll(callback){
        const p = path.join(
            path.dirname(require.main.filename),
            'data',
            'products.json'
        );
        
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                callback([]);
            }
            else{
                callback(JSON.parse(fileContent));
            }
        });
        console.log('fechAll function');
    }

}
