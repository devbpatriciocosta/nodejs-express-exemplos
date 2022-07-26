import { Router } from "express";
import { verifyAccessToken } from "../../utils/auth";

const router = Router()

router.post('/', verifyAccessToken, (req, res) => {
  res.send('CREAT POST /')
}) 

router.get('/:id?', verifyAccessToken, (req, res) => {
  // AQUI TEMOS DUAS OPÇÕES - LISTAR TODOS OS POSTS OU APENAS UM POST!
  res.send('GET POST /')
}) 

export default router