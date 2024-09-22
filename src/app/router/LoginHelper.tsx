import { useRouter } from "next/router";

// Define and export the handleLoginRedirect function
export const handleLoginRedirect = () => {
  const router = useRouter();

  // This needs to be used inside a component that calls this function.
  return () => {
    router.push("/Login");
  };
};
