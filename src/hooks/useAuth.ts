import { useEffect } from "react";
import { useRouter } from "next/navigation";

const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/"); // Redirect to login page if not authenticated
    }
  }, [router]); // Include 'router' in the dependency array

  return null;
};

export default useAuth;
