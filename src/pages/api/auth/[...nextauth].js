import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()
export default NextAuth({
providers: [
  DiscordProvider({
    clientId: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
   }),
  ],
  jwt: {
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
  },

  database: process.env.DATABASE_URL,
  adapter: PrismaAdapter(prisma),
});