const express = require('express')
const router = express.Router()
const { form } = require('../models/index.model')
const FormService = require('../services/forms.service')
const { body, validationResult } = require('express-validator');

const formService = new FormService(form)

router.get('/allforms', async (req, res) => {
  const forms = await formService.getForm()
  if(forms){
    res.status(200).json(forms).end()
} else{
    res.status(400).send('Could not find any form')
}

})

router.get('/:id', async (req, res) => {
  const form = await formService.getFormbyId(req.params.id)
  if(form){
    res.status(200).json(form).end()
  } else{
    res.status(400).send('Could not find form')
  }
})

router.post('/createform',
  body('firstname').not().isEmpty().trim().escape(),
  async (req, res) => {
     const errors = validationResult(req)
     if (!errors.isEmpty()) {
       return res.status(400).json({errors: errors.array() })
      }
  const { firstname, lastname, email } = req.body
  try{
    await formService.createForm({ firstname, lastname, email})
    res.status(201).send('Form created successfully')
  } catch (err) {
    res.status(400).send('Could not create form')
  }
})

router.put('/updateform', async (req, res) => {
  const { id, firstname, lastname, email } = req.body
  try{
    await formService.updateForm({ id, firstname, lastname, email})
    res.status(201).send('Form updated successfully')
  } catch (err) {
    res.status(400).send('Could not update form')
  }
})

router.delete('/deleteform/:id', async (req, res) => {
  try{
    await formService.deleteForm(req.params.id)
    res.status(204).send('Form deleted successfully')
  } catch (err) {
    res.status(400).send('Could not delete form')
  }
})

module.exports = router