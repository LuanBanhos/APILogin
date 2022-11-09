const { Router } = require('express');
const PessoaController = require('./controllers/PessoaController')

const routes = Router();

routes.get('/home', (req,res)=>{
    return res.status(200).json({msg:'Servidor esta no ar'});
});


routes.post('/register', PessoaController.store)
routes.get('/pessoas', PessoaController.index)
routes.get('/pessoas/:id', PessoaController.show)
routes.patch('/pessoas/:id', PessoaController.update)
routes.delete('/pessoas/:id', PessoaController.delete)





module.exports = routes;