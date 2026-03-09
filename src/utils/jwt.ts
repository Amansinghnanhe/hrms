import jwt, { SignOptions } from "jsonwebtoken";

interface JwtPayload {
  id: string;
  role: string;
}

export const generateToken = (id: string, role: string): string => {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET is missing");

  const expiresIn = process.env.JWT_EXPIRE || "1h";

  const payload: JwtPayload = { id, role };

  const options: SignOptions = { expiresIn: expiresIn as any }; // ✅ as any fixes TS

  return jwt.sign(payload, secret as jwt.Secret, options);
};
