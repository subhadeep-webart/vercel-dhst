import { signToken } from "@/lib/jwt";
import dbConnect from "@/lib/mongodb";
import { error, success } from "@/lib/responseHandler";
import User from "@/model/userModel";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    const cookieStore = await cookies();
    await dbConnect();

    const { email, password } = await req.json();

    const user = await User.findOne({ email }).lean();

    if (!user) {
      return error("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return error("Oops! That password doesn’t match.");
    }

    const token = signToken({
      id: user._id,
      email: user.email,
      role: "admin",
    });

    cookieStore.set({
      name: "adminToken",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
      sameSite: "strict",
    });

    delete user.password;

    return success("Login successfully", user);
  } catch (err) {
    console.log(err);
    return error({ error: err.message });
  }
}