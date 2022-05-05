import { Router } from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/ndoemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

const router =  Router()

router.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const nodemailerMailAdapter = new NodemailerMailAdapter()

  const submitFeedbacksUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  )

  await submitFeedbacksUseCase.execute({
    type,
    comment,
    screenshot
  })

  return res.status(201).send()
})

export { router }