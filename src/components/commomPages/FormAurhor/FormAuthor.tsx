"use client";
import { Button, Card, Input } from "hikari-ui";
import { useMemo, useState } from "react";

interface FormAuthorProps {
  authorId?: string;
}
export function FormAuthor({ authorId }: FormAuthorProps) {
  const [author, setAuthor] = useState("");

  const isEditAuthor = useMemo(() => Boolean(authorId), [authorId]);
  return (
    <Card>
      <Card.Header>
        <Card.Title>Criar banda/cantor</Card.Title>
      </Card.Header>
      <Card.Body>
        <Input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          label="Nome"
          placeholder="Adele"
          required
        />
      </Card.Body>
      <Card.Footer>
        <Button>Criar</Button>
      </Card.Footer>
    </Card>
  );
}
