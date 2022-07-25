import { Router } from "express";

const router = Router()

router.post('/', (req, res) =>{
  res.send('CREAT POST /')
}) 

router.get('/:id?', (req, res) =>{
  // AQUI TEMOS DUAS OPÇÕES - LISTAR TODOS OS POSTS OU APENAS UM POST!
  res.send('GET POST /')
}) 

export default router