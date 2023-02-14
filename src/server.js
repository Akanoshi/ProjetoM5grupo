import app from "./app.js";
import User from "./Models/user.js";
import Produto from "./Models/produtos.js";
const port = 3000



app.get('/produtos', async (req, res, next) => {

    await Produto.findAll()
    .then((produtos) => {
        console.log(produtos)
        return res.json({
            erro: false,
            message: "sucesso"
        })
    }).catch((err) => {
        return res.status(400).json({
            erro: err,
            message: "falha na requisição"});
    })
});

app.post('/cadastrar', async (req, res, next) => {
    console.log(req.body)

    await User.create(req.body)
    .then(()=> {
        return res.json({
            erro: false,
            message: "sucesso"});
    }).catch((err) => {
        return res.status(400).json({
            erro: err,
            message: "falha no cadastro"});
    })

    res.send('POST')
});

app.put('/', (req, res, next) => {
    res.send('PUT')
});

app.delete('/', (req, res, next) => {
    res.send('DELETE')
});



app.listen(port, () => {   
    console.log(`Listening on port ${port}`)
})
