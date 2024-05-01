import { jwtVerify } from "jose";
import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";
import { useStore } from "./store/NewStore";
import { useEffect } from "react";


export const middleware = (request) => {
//   return NextResponse.redirect(new URL("/home", request.url));
//   const { pathname } = request.nextUrl;

// console.log(request)

//   try {
//     let cookie = request.cookies.get("jwt-token").value;
//     if (!cookie || !cookie.startsWith("Bearer "))
//       throw new Error("Invalid Token");

//     const secret = new TextEncoder().encode(process.env.JWT_SECRET);
//     await jwtVerify(cookie.split("Bearer ")[1], secret);
//     return NextResponse.next();
//   } catch (error) {
//     return NextResponse.redirect(new URL("/", request.url));
//     //   return NextResponse.redirect(new URL(`/login?redirectUrl-${pathname}`, request.url));
//   }
    let user = request.cookies.get('logged');
    if(user){
        return NextResponse.next();
    }
    else{
        return NextResponse.redirect(new URL("/", request.url));
    }

};

export const config = {
  //   matcher: '/about/:path*',
  matcher: ["/about/:path*", "/dashboard/:path*"],
};
