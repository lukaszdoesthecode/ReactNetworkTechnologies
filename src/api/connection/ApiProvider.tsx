import React, { ReactNode, useContext, createContext } from "react";
import { HomePageClient } from "./home-page";

const ApiContext = createContext<HomePageClient | null>(null);

export default function ApiProvider({ children }: { children: ReactNode }) {
    const apiClient = new HomePageClient();

    return (
        <ApiContext.Provider value={apiClient}>
            {children}
        </ApiContext.Provider>
    );
}

export function useApi() {
    const context = useContext(ApiContext);
    if (context === null) {
        throw new Error("useApi must be used within an ApiProvider");
    }
    return context;
}
