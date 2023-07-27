const express = require('express');
const router = express.Router();

const {
    getLogin,
    postLogin,
    putLogin,
    deleteLogin
} = require('../controllers/login');

// One Type
// router.get('/', getLogin)
// router.post('/', postLogin)
// router.put('/:id', putLogin)
// router.delete('/:id', deleteLogin)

// Seconde Type
router.route('/').get(getLogin).post(putLogin);
router.route('/:id').put(putLogin).delete(deleteLogin);

module.exports = router;