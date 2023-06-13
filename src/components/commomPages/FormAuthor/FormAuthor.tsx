import { useCreateAuthorMutation } from "@/graphql/generated-types";
import { Button, Card, Input } from "hikari-ui";
import { useState } from "react";

interface FormAuthorProps {
  authorId?: string;
}

export function FormAuthor({ authorId }: FormAuthorProps) {
  const [authorName, setAuthorName] = useState("");

  const [createAuthor, { loading: isCreatinAuthor }] =
    useCreateAuthorMutation();

  return (
    <Card asChild className="col-span-12 md:col-span-4 h-fit">
      <form action="">
        <Card.Header>
          <Card.Title>Criar Bandas/cantore(a)s</Card.Title>
        </Card.Header>
        <Card.Body>
          <Input
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            label="Nome"
            placeholder="Adele"
            required
          />
        </Card.Body>
        <Card.Footer variantStyle="right">
          <Button type="submit">Criar</Button>
        </Card.Footer>
      </form>
    </Card>
  );
}
