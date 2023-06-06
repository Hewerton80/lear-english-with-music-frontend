"use client";
import { Button, Card, Input, Select, Textarea } from "hikari-ui";
import { useMemo, useState } from "react";

interface FormMusicProps {
  musicId?: string;
}
export function FormMusic({ musicId }: FormMusicProps) {
  const isEditAuthor = useMemo(() => Boolean(musicId), [musicId]);

  return (
    <div className="grid grid-cols-12 gap-4">
      <Card className="col-span-12 md:col-span-8">
        <Card.Header>
          <Card.Title>Criar música</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Título" placeholder="Easy On Me" required />
            <Select label="bandas/cantores" required options={[]} isMulti />
            <Textarea label="Letra" required />
          </div>
        </Card.Body>
        <Card.Footer variantStyle="right">
          <Button>Criar</Button>
        </Card.Footer>
      </Card>

      <Card className="col-span-12 md:col-span-4 h-fit">
        <Card.Header>
          <Card.Title>Criar banda/cantor</Card.Title>
        </Card.Header>
        <Card.Body>
          <Input label="Nome" placeholder="Adele" required />
        </Card.Body>
        <Card.Footer variantStyle="right">
          <Button>Criar</Button>
        </Card.Footer>
      </Card>
    </div>
  );
}
