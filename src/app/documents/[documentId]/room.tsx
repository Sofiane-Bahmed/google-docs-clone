"use client";

import { ReactNode } from "react";
import { useParams } from "next/navigation";
import {
    LiveblocksProvider,
    RoomProvider,
    ClientSideSuspense,
} from "@liveblocks/react/suspense";

export function Room({ children }: { children: ReactNode }) {
    const params = useParams();
    return (
        <LiveblocksProvider publicApiKey={"pk_prod_4z1_rIoPV3QdVWfXJTDW10xaxaf3sw6NUImXomqXS8kFE06RFPlkDIIhOkr30kTv"}>
            <RoomProvider id={params.documentId as string}>
                <ClientSideSuspense fallback={<div>Loading…</div>}>
                    {children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    );
} 