import jwt from "jsonwebtoken";
import { config } from "../config/Config";
import Logging from "../library/Logging";
import { IUserModel } from "../models/User";

const signJWT = (
  user: IUserModel,
  callback: (error: Error | null, token: string | null) => void
): void => {
  var timeSinchEpoch = new Date().getTime();
  var expirationTime =
    timeSinchEpoch + Number(config.server.token.expireTime) * 100000;
  var expirationTimeInSecond = Math.floor(expirationTime / 1000);

  Logging.info(`${user.login} Attempting to sign token`);

  try {
    jwt.sign(
      {
        userId: user._id,
        userLogin: user.login,
      },
      config.server.token.secret,
      {
        issuer: config.server.token.issuer,
        algorithm: "HS256",
        expiresIn: expirationTimeInSecond,
      },
      (error, token) => {
        if (error) {
          callback(error, null);
        } else if (token) {
          callback(null, token);
        }
      }
    );
  } catch (error: any) {
    Logging.error(`${user.login} ${error}`);
    callback(error, null);
  }
};

export default signJWT;
