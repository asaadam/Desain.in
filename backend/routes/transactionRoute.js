const express = require('express');
const router = express.Router();

const transactionController = require('../controllers/transactionController');
const { auth, uploadFileToGCS, upload, checkConfirmation } = require('../middlewares');

router.get('/kategori', transactionController.getKategori);
router.get('/tag', auth, transactionController.getAllTag);
router.get('/tag/:tag', auth, transactionController.getTag);
router.get('/detail/:transactionId', auth, transactionController.transactionDetail);

router.post('/jual', auth, transactionController.jualJasa);
router.post('/beli', auth, transactionController.beliJasa);
router.post('/deposit', auth, transactionController.depositJasa);
router.post('/:transactionId/create', auth, transactionController.createStep);
router.post('/:transactionId/submit/:stepId', auth, upload.single('image'), uploadFileToGCS, transactionController.submitStep);
router.post('/:transactionId/accept/:stepId', auth, checkConfirmation, transactionController.acceptStep);

router.put('/:transactionId/update/:stepId', auth, transactionController.updateStep);

router.delete('/:transactionId/delete/:stepId', auth, transactionController.deleteStep);

module.exports = router