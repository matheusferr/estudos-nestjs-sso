import { Injectable } from "@nestjs/common";
import { Strategy, VerifyCallback, Profile } from "passport-google-oauth20";
import { PassportStrategy } from "@nestjs/passport";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, "google") {
  constructor() {
    super({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRECT,
      callbackURL: process.env.CALLBACK_URL,
      scope: ["email", "profile"],
    });
  }//4%2F0AX4XfWgCmgG4MZeDEKtiZUvkWTT9GW5Ku-xNbaRgyGcqqz1_I8XwtnQntk0ZNZWEG2O5LQ

  async validate(
    accessToken: string,
    _: string,
    profile: Profile,
    done: VerifyCallback
  ) {
    const { name, emails, photos } = profile;

    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken,
    };

    done(null, user);
  }
}
