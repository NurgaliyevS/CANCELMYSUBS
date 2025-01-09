import { signIn } from "next-auth/react";

export const handleSignIn = (e) => {
  e.preventDefault();
  signIn("google", {
    callbackUrl: "http://localhost:3000/dashboard",
  })
  
    
};
