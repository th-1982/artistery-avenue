import { rest } from "msw";

const baseURL = 'https://th-1982-artistery-avenue-198c22334f81.herokuapp.com/';

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(ctx.json{})      
   
  }),
];