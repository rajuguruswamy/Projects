import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export class TokenService {
  private static jwt_secret: string = process.env.JWT_SECRET!;

  static initialize = () => {
    console.log('Token service initialized');
    if (!this.jwt_secret) {
      throw new Error('JWT secret not found in environment variables!');
    }

    this.jwt_secret = process.env.JWT_SECRET!;
  };

  public static verify<TokenPayLoad>(token: string): Promise<TokenPayLoad> {
    return new Promise((resolve, rejcet) => {
      jsonwebtoken.verify(token, TokenService.jwt_secret, (error, decoded) => {
        if (error) {
          rejcet(error);
        } else {
          resolve(decoded as TokenPayLoad);
        }
      });
    });
  }

  public static sign(payload: string | object | Buffer): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        resolve(jsonwebtoken.sign(payload, TokenService.jwt_secret));
      } catch (error) {
        reject(error);
      }
    });
  }
}
