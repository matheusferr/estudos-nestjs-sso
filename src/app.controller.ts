import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard("google"))
  async auth() {}

  @Get("redirect")
  @UseGuards(AuthGuard("google"))
  redirect(@Req() req: Request) {
    return this.appService.redirect(req);
  }

  @Get("teste")
  @UseGuards(AuthGuard("google"))
  teste(@Req() req: Request) {
    return req.user
  }
}
