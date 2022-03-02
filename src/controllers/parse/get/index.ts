import { Request, Response } from 'express'

export const getParse = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      data: 'Hello world'
    })
  } catch (error) {
    return res.status(500).json({
      message: error
    })
  }
}
