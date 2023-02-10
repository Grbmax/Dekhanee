import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import { METHODS } from "http"

export const authOptions : NextAuthOptions = {
  // Configure one or more authentication providers
  secret : process.env.AUTH_SECRET,
  providers: [    
    // ...add more providers here

    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret : process.env.FACEBOOK_CLIENT_SECRET as string,
      authorization : {
        params : {
          authType : "reauthenticate",
        }
      }
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization : {
        params : {
          prompt : "login",
        }
      }
    }),

    CredentialsProvider({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: 'Credentials',
        // The credentials is used to generate a suitable form on the sign in page.
        // You can specify whatever fields you are expecting to be submitted.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          username : { label: "Username", type: "text", placeholder: "jsmith" },
          password : {  label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          // You need to provide your own logic here that takes the credentials
          // submitted and returns either a object representing a user or value
          // that is false/null if the credentials are invalid.
          // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
          // You can also use the `req` object to obtain additional parameters
          // (i.e., the request IP address)
          const res = await fetch("http://localhost:3000/api/auth/login", {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" }
          })
          const user = await res.json()
    
          // If no error and we have user data, return it
          if (res.ok && user) {
            return user
          }
          // Return null if user data could not be retrieved
          return null
        }
      }),
  ],

  callbacks:{
    async jwt({token,user,account,profile,isNewUser}) {
      const response = await fetch("http://localhost:3000/api/auth/register",{
        method: 'POST',
        body: JSON.stringify({token, user, account, profile, isNewUser }),
        headers: { "Content-Type" : "application/json" }
      });
      return({...token,...user,...account,...profile, isNewUser})
    },
    async session({session,token,user}) {
      session.user = token;
      console.log(session)
      return session;
    },
  },

  pages: {
    signIn:"/auth/login"
  }
}

export default NextAuth(authOptions)