const { body, validationResult } = require('express-validator');

const validateProjeto = [
  body('razao_social').isLength({ min: 2 }).withMessage('A razão social deve conter pelo menos 2 caracteres'),
  body('Nome_fantasia').isLength({ min: 2 }).withMessage('O nome fantasia deve conter pelo menos 2 caracteres'),
  body('cnpj').isLength({ min: 14, max: 14 }).withMessage('O CNPJ deve conter exatamente 14 caracteres'),
  body('telefone').isLength({ min: 11, max: 11 }).withMessage('O telefone deve conter exatamente 11 dígitos'),
  body('Rua').isLength({ min: 2 }).withMessage('A rua deve conter pelo menos 2 caracteres'),
  body('numero').isLength({ min: 1 }).withMessage('O número deve ser preenchido'),
  body('bairro').isLength({ min: 2 }).withMessage('O bairro deve conter pelo menos 2 caracteres'),
  body('cidade').isLength({ min: 2 }).withMessage('A cidade deve conter pelo menos 2 caracteres'),
  body('estado').isLength({ min: 2 }).withMessage('O estado deve conter pelo menos 2 caracteres'),
  body('cep').isLength({ min: 8 }).withMessage('O CEP deve conter pelo menos 8 caracteres'),
  body('email').isEmail().withMessage('O email deve ser um email válido'),
  body('login').isLength({ min: 6 }).withMessage('O login deve conter pelo menos 6 caracteres'),
  body('senha').isLength({ min: 8 }).withMessage('A senha deve conter pelo menos 8 caracteres'),
];

function handleValidationErrors(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

module.exports = {
  validateProjeto,
  handleValidationErrors,
};
