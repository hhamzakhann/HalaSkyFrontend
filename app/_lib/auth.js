import NextAuth, { CredentialsSignin } from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./zod";

class InvalidLoginError extends CredentialsSignin {
  code = "Invalid identifier or password";
}

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      credentials: {
        email: { label: "email", type: "email", placeholder: "Email" },
        password: {
          label: "password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize({ email, password }) {
        let user = null;

        const parsedCrediential = signInSchema.safeParse({ email, password });
        if (!parsedCrediential.success) {
          console.error("Invalid credential", parsedCrediential.error.errors);
          return null;
        }

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("email", email);
        urlencoded.append("password", password);

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: urlencoded,
          redirect: "follow",
        };

        const resp = await fetch(
          "http://localhost:3005/auth/login",
          requestOptions
        );

        if (!resp.ok) return null;
        const data = await resp.json();

        console.log("CONSOLE FROM AUTH.JS", data);

        user = {
          id: data.user.id.toString(), // Ensure ID is a string
          name: data.user.name, // Use name if available, otherwise email
          email: data.user.email,
          token: data.token, // Store JWT token from API if needed
        };

        if (!user) {
          throw new InvalidLoginError();
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // If the user object is available (during sign-in), add the token to the JWT
      if (user) {
        token.id = user.id; // Add user ID
        token.token = user.token; // Add token
        token.name = user.name; // Add name
        token.email = user.email; // Add email
      }
      return token;
    },
    async session({ session, token }) {
      // Pass the token from the JWT to the session object
      session.token = token.token;
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const { pathname } = nextUrl;

      if (pathname.startsWith("/login/admin") && isLoggedIn) {
        return Response.redirect(new URL("/", nextUrl));
      }
      return !!auth;
    },
    // jwt({ token, user }) {
    //   console.log("JWT", token, user);
    // },
  },
  pages: {
    signIn: "/login/admin",
  },
});
