import { rest } from "msw";

const baseURL = 'https://th-1982-artistery-avenue-198c22334f81.herokuapp.com/';

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
      "pk":11,
      "username":"Luca",
      "email":"","first_name":"",
      "last_name":"",
      "profile_id":11,
      "profile_image":
      "https://res.cloudinary.com/dz0hukrki/image/upload/v1/media/images/profile-image3_kaezyv",
    })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
  return res(ctx.status(200));
  }),
];