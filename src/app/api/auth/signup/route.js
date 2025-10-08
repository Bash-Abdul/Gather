// src/app/api/auth/signup/route.js
// import prisma from "../../../lib/prisma";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

const STRONG_PW = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

export async function POST(req) {
  try {
    const { name, email, password, confirmPassword } = await req.json();

    if (!name || !email || !password || !confirmPassword) {
      // return new Response(JSON.stringify({ error: "All fields required" }), {
      //   status: 400,
      // });
      return NextResponse.json({error: 'All fields required'}, {
        status: 400
      });
    }
    if (password !== confirmPassword) {
      // return new Response(JSON.stringify({ error: "Passwords do not match" }), {
      //   status: 400,
      // });
      return NextResponse.json({error: 'Passwords do not match'}, {
        status:400
      })
    }
    if (!STRONG_PW.test(password)) {
      // return new Response(
      //   JSON.stringify({
      //     error:
      //       "Password must be 8+ chars, include uppercase, lowercase, number and special char",
      //   }),
      //   { status: 400 }
      // );

      return NextResponse.json({
        error: 'Password must be 8+ chars, include uppercase, lowercase, number and special char'
      },{
        status: 400
      });
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      // return new Response(JSON.stringify({ error: "Email already in use" }), {
      //   status: 409,
      // });
      return NextResponse.json({error: 'Email already in use'}, {
        status: 409
      });
    }

    // const passwordHash = bcrypt.hashSync(password, 10);
    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, password: passwordHash },
      select: { id: true, name: true, email: true },
    });

    // return new Response(JSON.stringify({ ok: true, user }), { status: 201 });
    return NextResponse.json({ok:true, message: "User successfully created", user}, {status: 201});
  } catch (err) {
    console.error("signup error", err);
    // return new Response(JSON.stringify({ error: "Server error" }), {
    //   status: 500,
    // });
    return NextResponse.json({error: 'Server error'}, {
      status: 500
    });
  }
}
