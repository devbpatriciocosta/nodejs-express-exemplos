import * as express from 'express'

const app = express()
app.use(express.json())

import userController from './modules/user/userController'
import postController from './modules/post/postController'

app.use('/user', userController)
app.use('/post', postController)
/*

Rotas que nós temos que criar para usar: 

+ Essas duas primeiras rotas são referentes ao USUÁRIO:
  - Cadastro 
  - Login 

  + Essas duas são relacionadas aos POSTS: 
  - Criar posts
  - Listar posts

*/

app.listen(3000, () => console.log(`Online http://localhost:3000`))