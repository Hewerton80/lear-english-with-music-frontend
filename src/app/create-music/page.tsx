"use client";
import { FormMusic } from "@/components/commomPages/FormMusic";
import { Breadcrumbs } from "hikari-ui";
import Link from "next/link";

export default function CreateAuthor() {
  return (
    <div className="flex flex-col max-w-7xl w-full space-y-2">
      <Breadcrumbs>
        <Breadcrumbs.Link href="/" asChild>
          <Link href="/">Home</Link>
        </Breadcrumbs.Link>
        <Breadcrumbs.Link href="/create-author">
          Criar banda/cantor
        </Breadcrumbs.Link>
      </Breadcrumbs>
      <FormMusic />
    </div>
  );
}
