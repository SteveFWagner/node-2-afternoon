module.exports={
    createProduct: (req,res)=>{
        const db = req.app.get('db')
        let {name, description, price, image_url} = req.body
        db.create_product(name,description,price,image_url).then((response)=>{
            res.status(200).send(response)
        }).catch(err=>console.log(err))
    },
    getProducts: (req,res) =>{
        const db = req.app.get('db')
        db.read_products().then((response)=> {
            res.status(200).send(response)
        }).catch(err=> console.log(err))
    },
    getProduct: (req,res) => {
        const db = req.app.get('db')
        let {id} = req.params
        db.read_product(id).then((response)=>{
            res.status(200).send(response)
        }).catch(err=>console.log(err))
    },
    deleteProduct: (req,res) => {
        const db = req.app.get('db')
        let {id} = req.params
        db.delete_product(id).then(respose=>{
            res.status(200).send("Delete Accepted")
        }).catch(err=>console.log(err))
    },
    updateProduct: (req,res)=>{
        const db = req.app.get('db')
        let {id} = req.params
        let {name, description, price, image_url} = req.body
        db.update_product(id,name,description,price,image_url).then(response => {
            res.status(200).send("Update Accepted")
        })
    }
}