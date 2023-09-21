const { body, validationResult } = require('express-validator');

const validateVoluntario = [
    body('nome').isLength({ min: 2 }).withMessage('O nome deve conter pelo menos 2 caracteres'),
    body('sobrenome').isLength({ min: 2 }).withMessage('O sobrenome deve conter pelo menos 2 caracteres'),
    body('nascimento').matches(/^\d{4}-\d{2}-\d{2}$/).withMessage('A data de nascimento deve estar no formato AAAA-MM-DD'),
    body('rg').isLength({ min: 7 }).withMessage('O RG deve conter pelo menos 7 caracteres'),
    body('cpf').isLength({ min: 11 }).withMessage('O CPF deve conter pelo menos 11 caracteres'),
    body('telefone').isLength({ min: 11, max: 11 }).withMessage('O telefone deve conter exatamente 11 dígitos'),
    body('cep').isLength({ min: 8 }).withMessage('O CEP deve conter pelo menos 8 caracteres'),
    body('rua').isLength({ min: 2 }).withMessage('A rua deve conter pelo menos 2 caracteres'),
    body('numero').isNumeric().withMessage('O número deve ser um valor numérico'),
    body('bairro').isLength({ min: 2 }).withMessage('O bairro deve conter pelo menos 2 caracteres'),
    body('cidade').isLength({ min: 2 }).withMessage('A cidade deve conter pelo menos 2 caracteres'),
    body('estado').isLength({ min: 2 }).withMessage('O estado deve conter pelo menos 2 caracteres'),
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
    validateVoluntario,
    handleValidationErrors,
};