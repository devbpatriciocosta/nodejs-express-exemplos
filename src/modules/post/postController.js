import { Router } from "express";
import { verifyAccessToken } from "../../utils/auth";

import { creatPost, getPost } from "./postService";

const router = Router()

router.post('/', verifyAccessToken, (req, res) => {
  try {
    const post = creatPost(req.body, req.user)
    res.status(200).send(post)
  } catch (err) {
    res.status(500).send(err.message)
  }
}) 

router.get('/:id?', verifyAccessToken, (req, res) => {
  // AQUI TEMOS DUAS OPÇÕES - LISTAR TODOS OS POSTS OU APENAS UM POST!
  try {
    const posts = getPost(req.params.id)
    res.status(200).send(posts)
  } catch (err) {
    if (err.message === 'post_nao_existe')
      return res.status(400).send(err.message)

    res.status(500).send(err.message)
  }
}) 

export default router