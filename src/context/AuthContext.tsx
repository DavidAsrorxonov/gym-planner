import { authClient } from "@/lib/auth";
import type { AuthContext } from "@/types/auth-context";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext<AuthContext | null>(null);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [neonUser, setNeonUser] = useState<any>(null);

  useEffect(() => {
    async function loadUser() {
      try {
        const result = await authClient.getSession();
        if (result && result.data?.user) {
          setNeonUser(result.data.user);
        } else {
          setNeonUser(null);
        }
      } catch (error) {
        setNeonUser(null);
      }
    }

    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user: neonUser }}>
      {children}
    </AuthContext.Provider>
  );
}
