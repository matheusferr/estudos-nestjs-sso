import { Injectable } from "@nestjs/common";
import type { Request } from "express";

@Injectable()
export class AppService {
  redirect(req: Request) {
    if (!req.user) return "No user from google";

    return {
      message: "User information from google",
      user: req.user,
    };
  }
}
