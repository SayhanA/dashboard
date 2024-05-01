import { SignJWT } from "jose";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export const POST = async (request) => {
  const body = await request.json();
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const alg = "HS256";

  const jwt = await new SignJWT(body)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    // .setIssuer("urn:example:issuer")
    // .setAudience("urn:example:audience")
    .setExpirationTime("90d")
    .sign(secret);

    cookies().set({
        name: "jwt-token",
        value: `Bearer ${jwt}`,
        secure: true,
        httpOnly: true,
    })

  console.log(jwt);
    return NextRequest.json({message: 'Token created'})
};
