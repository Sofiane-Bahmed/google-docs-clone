import Image from "next/image";
import Link from "next/link";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Preloaded, usePreloadedQuery } from "convex/react";


import { DocumentInput } from "./document-input";
import { MenuBar } from "./menu-bar";
import { Avatars } from "../avatars";
import { Inbox } from "../inbox";
import { Doc } from "../../../../../convex/_generated/dataModel";
import { api } from "../../../../../convex/_generated/api";

interface NavbarProps {
    data: Doc<"documents">;
    preloadedDocument: Preloaded<typeof api.documents.getById>

};

export const Navbar = ({ data, preloadedDocument }: NavbarProps) => {
    const document = usePreloadedQuery(preloadedDocument);

    return (
        <nav className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
                <Link href="/">
                    <Image src="/logo.svg" alt="logo" width={36} height={36} />
                </Link>
                <div className="flex flex-col">
                    <DocumentInput title={data.title} id={data._id} />
                    <MenuBar data={document} />
                </div>
            </div>
            <div className="flex items-center gap-3 pl-6">
                <Avatars />
                <Inbox />
                <OrganizationSwitcher
                    afterCreateOrganizationUrl="/"
                    afterLeaveOrganizationUrl="/"
                    afterSelectOrganizationUrl="/"
                    afterSelectPersonalUrl="/"
                />
                <UserButton />
            </div>
        </nav>
    );
};