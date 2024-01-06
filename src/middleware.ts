// this line applies next-auth to the entire app
export { default } from "next-auth/middleware";

// pages to be protected by next-auth
export const config = { matcher: ["/"] };
