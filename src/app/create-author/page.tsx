"use client";
import { FormAuthor } from "@/components/commomPages/FormAurhor";
import { Breadcrumbs } from "hikari-ui";
import Link from "next/link";

export default function CreateAuthor() {
  return (
    <div className="flex flex-col max-w-2xl w-full space-y-2">
      <Breadcrumbs>
        <Breadcrumbs.Link href="/" asChild>
          <Link href="/">Home</Link>
        </Breadcrumbs.Link>
        <Breadcrumbs.Link href="/create-author">
          Criar banda/cantor
        </Breadcrumbs.Link>
      </Breadcrumbs>
      <FormAuthor />
    </div>
  );
}
