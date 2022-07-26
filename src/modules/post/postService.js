let posts = []

export const creatPost = (data, user) => {
  const post = {
    createdBy: user.email,
    ...data
  }

  posts.push(post)
  return post
}

export const getPost = (id) => {
  if (id) {
    const post = posts[id]
    if (!post) throw new Error('Post_nao_existe')
    //Regra - Procurar pelo post
    return post
  }
  return posts
}