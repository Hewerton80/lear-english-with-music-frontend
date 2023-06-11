"use client";
import { Button, Card, Input, Select, Textarea, SelectOption } from "hikari-ui";
import { useCallback, useMemo, useState } from "react";
import {
  useGetAuthorsQuery,
  SortOrder,
  GetAuthorsQueryVariables,
} from "@/graphql/generated-types";
import { useDebouncedCallback } from "use-debounce";

interface FormSongProps {
  songId?: string;
}

const initialAuthorsQueryVariables: GetAuthorsQueryVariables = {
  orderBy: { name: SortOrder.Asc },
  input: { currentPage: 1, perPage: 15 },
};

export function FormSong({ songId }: FormSongProps) {
  const {
    data: { authors } = {},
    loading: loadingAuthors,
    refetch: refetchAuthors,
  } = useGetAuthorsQuery({
    variables: initialAuthorsQueryVariables,
  });

  const [selectedAuthors, setSelectedAuthors] = useState<SelectOption[]>([]);

  const isEditAuthor = useMemo(() => Boolean(songId), [songId]);

  const autocompliteAuthorsOptions = useMemo<SelectOption[]>(() => {
    return (
      authors?.docs?.map((author) => ({
        value: author?.id,
        label: author?.name,
      })) || []
    );
  }, [authors]);

  const handleRefetchAuthors = useDebouncedCallback(
    useCallback(
      (newValue: string) => {
        refetchAuthors({
          ...initialAuthorsQueryVariables,
          where: { name: { contains: newValue.trim() } },
        });
      },
      [refetchAuthors]
    ),
    1000
  );

  const handleChangeAuthorsInputText = useCallback(
    (newValue: string) => {
      // if (!newValue.trim()) return;
      handleRefetchAuthors(newValue);
    },
    [handleRefetchAuthors]
  );

  const handleChangeOptions = useCallback((newOptions: SelectOption[]) => {
    if (!newOptions) return;
    setSelectedAuthors(newOptions);
  }, []);

  return (
    <div className="grid grid-cols-12 gap-4">
      <Card
        asChild
        className="col-span-12 md:col-span-8"
        css={{ overflow: "visible" }}
      >
        <form action="">
          <Card.Header>
            <Card.Title>Criar música</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Título" placeholder="Easy On Me" required />
              <Select
                label="Bandas/cantore(a)s"
                value={selectedAuthors}
                required
                options={autocompliteAuthorsOptions}
                onchangeMultValue={handleChangeOptions}
                onInputChange={handleChangeAuthorsInputText}
                isMulti
                isAutocomplite
                isLoading={loadingAuthors || handleRefetchAuthors.isPending()}
              />
              <Textarea label="Letra" />
            </div>
          </Card.Body>
          <Card.Footer variantStyle="right">
            <Button>Criar</Button>
          </Card.Footer>
        </form>
      </Card>

      <Card className="col-span-12 md:col-span-4 h-fit">
        <Card.Header>
          <Card.Title>Criar Bandas/cantore(a)s</Card.Title>
        </Card.Header>
        <Card.Body>
          <Input label="Nome" placeholder="Adele" required />
        </Card.Body>
        <Card.Footer variantStyle="right">
          <Button type="submit">Criar</Button>
        </Card.Footer>
      </Card>
    </div>
  );
}
