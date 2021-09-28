require('dotenv/config')
const express = require('express')
const PostService = require('../service/post')
const router = express.Router()
const userAuth = require('../middlewares/userAuth')
const multer_post = require('../middlewares/multerPost');

function validValues(value) {
  if (value === '' || value === undefined || value === null) {
    return null
  }
  return value
}


router.post('/postLoadFile', multer_post.single('image'), async(req, res, next) => {
  //let user = processId(req.data.id)
  let filename = ''

  if (!req.file){ // || user === undefined) {
    res.status(400).send('No file uploaded.');

    return;
  }

  if (req.file) {
    filename = req.file['filename']
  } else {
    filename = ''
  }
  console.log(filename, '...')
  return res.json({filename})

  //const blob = bucket.file(`${Date.now().toString()}-${uuid()}`);
  //const blobStream = blob.createWriteStream();

  //blobStream.on('error', err => {
  //  next(err);
  //});

  //blobStream.on('finish', () => {
  //  const publicUrl = format(
  //   `https://storage.googleapis.com/${bucket.name}/${blob.name}`
  //  );
  //  res.json({file:publicUrl})
  //});
  //blobStream.end(req.file.buffer);
})


router.post('/post', userAuth, async (req, res) => {
  let { title, description, user, tags, imgs } = req.body

  // Algum valor Obrigatório é nulo
  if( validValues(title) === null ||
      validValues(description) === null ||
      //validValues(user) === null  ||
      validValues(tags) === null ||
      validValues(imgs) === null) {
        res.statusCode = 400
        return res.json({error: 'Algum valor inválido'})
    }

  if (validValues(user) === null) {
    user = undefined
  }

  try {
    let newPost = await PostService.Create({ title, description, user, tags, imgs })
    return res.json(newPost)
  } catch(error) {
    console.log(error)
    res.statusCode = 500
    return res.json({error: 'Erro no servidor'})
  }
})

router.put('/post/:id', userAuth, async (req, res) => {
  let { title, description, user, tags, imgs } = req.body
  let { id } = req.params


  // Algum valor Obrigatório é nulo
  if( validValues(title) === null ||
      validValues(description) === null ||
      validValues(user) === null  ||
      validValues(tags) === null ||
      validValues(imgs) === null) {
        res.statusCode = 400
        return res.json({error: 'Algum valor inválido'})
    }

  try {
    let postUpdate = await PostService.FindByIdAndUpdate(id,  { title, description, user, tags, imgs })
    return res.json(postUpdate)
  } catch(error) {
    res.statusCode = 500
    return res.json({error: 'Erro no servidor'})
  }
})

router.get('/post/:id', userAuth, async (req, res) => {
  let { id } = req.params

  try {
    let post = await PostService.FindById(id)
    return res.json(post)
  } catch(error) {
    res.statusCode = 500
    return res.json({error: 'Erro no servidor'})
  }
})

router.get('/posts', async (req, res) => {
  try {
    let posts = await PostService.FindAll()
    return res.json(posts)
  } catch(error) {
    res.statusCode = 500
    return res.json({error: 'Erro no servidor'})
  }
})



router.delete('/post/:id', userAuth, async (req, res) => {
  let idUser = req.data.id
  let idPost = req.params.id

  try {
    await PostService.DeleteById(idPost, idUser)
    return res.json({})
  } catch(error) {
    res.statusCode = 500
    return res.json({error: 'Erro no servidor'})
  }
})

module.exports = router
