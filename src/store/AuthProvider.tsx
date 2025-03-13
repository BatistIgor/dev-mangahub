"use client";

import { useAppDispatch } from "@/hooks/useStore";
import { useCheckAuthQuery } from "@/services/authApi";
import { setCredentials } from "@/store/authSlice";
import { useEffect } from "react";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useAppDispatch();
    const { data, isLoading, error } = useCheckAuthQuery({});

    useEffect(() => {
        if (data?.access) {
            dispatch(setCredentials({ accessToken: data.access }));
        }
    }, [data, dispatch]); 


    return <>{children}</>;
};