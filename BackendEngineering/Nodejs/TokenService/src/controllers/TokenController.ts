import { Request, Response } from 'express';
import { TokenService } from '../services/TokenService';

export class TokenController {
  public static async generateToken(req: Request, res: Response) {
    try {
      const token: string = await TokenService.sign({ user: 'john.doe' });
      res.send('Token: ' + token);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}
