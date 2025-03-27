import NextAuth, { CredentialsSignin } from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./zod";
import { BASE_URL } from "@/constant/constant";

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
          console.error("Invalid credential", parsedCrediential);
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

        const resp = await fetch(`${BASE_URL}/auth/login`, requestOptions);

        if (!resp.ok || resp.status === 401) return null;

        const data = await resp.json();
        if (!data.status)
          throw new Error(data.error || "Invalid identifier or password");

        user = {
          id: String(data.user.id), // Ensure ID is a string
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
        token.role = user.Roles;
      }
      return token;
    },
    async session({ session, token }) {
      // Pass the token from the JWT to the session object

      session.user = {
        id: token.id, // Ensure ID is included
        name: token.name,
        email: token.email,
        token: token.token, // Pass the token if needed
      };
      // session.token = token.token;
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
    async redirect({ url, baseUrl }) {
      if (url === "/api/auth/login") return baseUrl; // Default redirect
      return url;
    },
  },
  pages: {
    signIn: "/login/admin",
  },
});
