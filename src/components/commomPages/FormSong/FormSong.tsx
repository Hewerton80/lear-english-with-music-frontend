import {
  Button,
  Card,
  Input,
  Select,
  SelectOption,
  useAlert,
} from "hikari-ui";
import { FormEvent, useCallback, useMemo, useState } from "react";
import {
  useGetAuthorsLazyQuery,
  SortOrder,
  Song,
  GetAuthorsQueryVariables,
  useCreateSongMutation,
  MutationCreateSongArgs,
} from "../../../graphql/generated-types";
import { useDebouncedCallback } from "use-debounce";
import { ApolloError } from "@apollo/client";
import { getParsedValidationError } from "../../../utils/getParsedValidationError";

type SongError = {
  [Property in keyof (Song & { values: string })]?: string;
};

interface FormSongProps {
  songId?: string;
}

const initialAuthorsQueryVariables: GetAuthorsQueryVariables = {
  orderBy: { name: SortOrder.Asc },
  input: { currentPage: 1, perPage: 15 },
};

export function FormSong({ songId }: FormSongProps) {
  const [fetchAuthors, { data, loading: loadingAuthors }] =
    useGetAuthorsLazyQuery({
      variables: initialAuthorsQueryVariables,
    });

  const [createSong, { loading: isCreateTingSong }] = useCreateSongMutation();

  const { showAlert } = useAlert();

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [lyric, setLyric] = useState("");
  const [selectedAuthors, setSelectedAuthors] = useState<SelectOption[]>([]);
  const [isWriting, setIsWriting] = useState(false);
  const [songError, setSongError] = useState<SongError>({});

  const authors = useMemo(() => data?.authors, [data]);
  const isEditAuthor = useMemo(() => Boolean(songId), [songId]);
  const isLoadingSelect = useMemo(
    () => loadingAuthors || isWriting,
    [loadingAuthors, isWriting]
  );
  const isSubmitingSong = useMemo(() => isCreateTingSong, [isCreateTingSong]);

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
        fetchAuthors({
          variables: {
            ...initialAuthorsQueryVariables,
            where: { name: { contains: newValue.trim() } },
          },
        });
        setIsWriting(false);
      },
      [fetchAuthors]
    ),
    1000
  );

  const handleChangeAuthorsInputText = useCallback(
    (newValue: string) => {
      if (!newValue.trim()) return;
      setIsWriting(true);
      handleRefetchAuthors(newValue);
    },
    [handleRefetchAuthors]
  );

  const getSongFormParams = useCallback(() => {
    return {
      authorIds: { values: selectedAuthors.map((authorId) => authorId.value) },
      data: { title, url, lyric },
    } as MutationCreateSongArgs;
  }, [title, url, lyric, selectedAuthors]);

  const clearSongFields = useCallback(() => {
    setTitle("");
    setLyric("");
    setUrl("");
    setSelectedAuthors([]);
  }, []);

  const handleChangeOptions = useCallback((newOptions: SelectOption[]) => {
    if (!newOptions) return;
    setSelectedAuthors(newOptions);
  }, []);

  const onCompletSubmitSong = useCallback(() => {
    showAlert({ variant: "success", title: "Música adicionada com sucesso!" });
    clearSongFields();
  }, [showAlert, clearSongFields]);

  const onErrorSubmitSong = useCallback(
    (error: ApolloError) => {
      console.log({ error });
      let songErrorTmp: any = {};
      const graphQLErrorExtensions = error?.graphQLErrors?.[0]?.extensions;
      if (graphQLErrorExtensions?.status === 409) {
        songErrorTmp.title = error?.message;
      } else if (Array.isArray(graphQLErrorExtensions?.validationErrors)) {
        console.log(
          "graphQLErrorExtensions?.validationErrors",
          graphQLErrorExtensions?.validationErrors
        );
        songErrorTmp = {
          ...getParsedValidationError(graphQLErrorExtensions?.validationErrors),
        };
      } else {
        showAlert({ variant: "danger", title: "Erro ao criar música" });
      }
      setSongError(songErrorTmp);
    },
    [showAlert]
  );

  const handleSubmitSongForm = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(isEditAuthor);
      setSongError({});
      const songFormParams = getSongFormParams();
      createSong({
        variables: songFormParams,
        onCompleted: onCompletSubmitSong,
        onError: onErrorSubmitSong,
      });
    },
    [
      isEditAuthor,
      createSong,
      getSongFormParams,
      onCompletSubmitSong,
      onErrorSubmitSong,
    ]
  );

  return (
    <Card asChild css={{ overflow: "visible" }}>
      <form onSubmit={handleSubmitSongForm}>
        <Card.Header>
          <Card.Title>Criar música</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              label="Título"
              placeholder="Easy On Me..."
              feedbackText={songError?.title}
              state="danger"
              required
            />
            <Select
              label="Bandas/cantore(a)s"
              value={selectedAuthors}
              required
              options={autocompliteAuthorsOptions}
              onchangeMultValue={handleChangeOptions}
              onInputChange={handleChangeAuthorsInputText}
              isMulti
              isAutocomplite
              isLoading={isLoadingSelect}
              feedbackText={songError?.values}
              state="danger"
            />
            <Input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              label="Url"
              placeholder="https://www.youtube.com..."
              required
              feedbackText={songError?.url}
              state="danger"
            />
            {/* <Textarea
              value={lyric}
              onChange={(e) => setLyric(e.target.value)}
              label="Letra"
              feedbackText={songError?.lyric}
              state="danger"
              rows={8}
            /> */}
          </div>
        </Card.Body>
        <Card.Footer variantStyle="right">
          <Button type="submit" isLoading={isSubmitingSong}>Criar</Button>
        </Card.Footer>
      </form>
    </Card>
  );
}
