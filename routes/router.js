const { createClub, getAll, getOne, upddateClub, deleteCkub } = require('../controllers/clubscontrollers');

// import express and extract router 
 const router = require('express').Router();

router.post('/club', createClub)

router.get('/clubs', getAll)

router.get('/clubs/:id', getOne)

router.put('/clubs/:id', upddateClub)

router.delete('/clubs/:id', deleteCkub)

 module.exports = router