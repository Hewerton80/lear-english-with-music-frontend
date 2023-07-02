// import { 
//    useCreateAuthorMutation, 
//   Author 
// } from "../../../graphql/generated-types";
// import { getParsedValidationError } from "../../../utils/getParsedValidationError";
// import { ApolloError } from "@apollo/client";
// import { FormEvent, useCallback, useState } from "react";
import { 
  // Button,  Input, useAlert,
  Card 
} from "hikari-ui";

// type AuthorError = {
//   [Property in keyof Author]?: string;
// };

// interface FormAuthorProps {
//   authorId?: string;
// }

export function FormAuthor() {
  // const { showAlert } = useAlert();
  // const [createAuthor, { loading: isCreatinAuthor }] =
  //   useCreateAuthorMutation();

  // const [authorName, setAuthorName] = useState("");

  // const [authorError, setAuthorError] = useState<AuthorError>({});

  // const onErrorSubmitSong = useCallback(
  //   (error: ApolloError) => {
  //     console.log({ error });
  //     let authorErrorTmp: any = {};
  //     const graphQLErrorExtensions = error?.graphQLErrors?.[0]?.extensions;
  //     if (graphQLErrorExtensions?.status === 409) {
  //       authorErrorTmp.name = error?.message;
  //     } else if (Array.isArray(graphQLErrorExtensions?.validationErrors)) {
  //       console.log(
  //         "graphQLErrorExtensions?.validationErrors",
  //         graphQLErrorExtensions?.validationErrors
  //       );
  //       authorErrorTmp = {
  //         ...getParsedValidationError(graphQLErrorExtensions?.validationErrors),
  //       };
  //     } else {
  //       showAlert({ variant: "danger", title: "Erro ao criar música" });
  //     }
  //     setAuthorError(authorErrorTmp);
  //   },
  //   [showAlert]
  // );

  // const onCompletSubmitSong = useCallback(() => {
  //   showAlert({
  //     variant: "success",
  //     title: "Banda/cantor(a) adicionado(a)s com sucesso!",
  //   });
  //   setAuthorName("");
  // }, [showAlert]);

  // const handleSubmitAuthor = useCallback(
  //   (e: FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     setAuthorError({});
  //     createAuthor({
  //       variables: { authorCreateInput: { name: authorName.trim() } },
  //       onCompleted: onCompletSubmitSong,
  //       onError: onErrorSubmitSong,
  //     });
  //   },
  //   [authorName, createAuthor, onErrorSubmitSong, onCompletSubmitSong]
  // );

  return (
    <Card asChild className="col-span-12 md:col-span-4 h-fit">
      {/* <form onSubmit={handleSubmitAuthor}>
        <Card.Header>
          <Card.Title>Criar Banda/cantore(a)</Card.Title>
        </Card.Header>
        <Card.Body>
          <Input
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            label="Nome"
            placeholder="Adele"
            feedbackText={authorError?.name}
            state="danger"
            required
          />
        </Card.Body>
        <Card.Footer variantStyle="right">
          <Button type="submit" variantStyle="info" isLoading={isCreatinAuthor}>
            Criar
          </Button>
        </Card.Footer>
      </form> */}
    </Card>
  );
}
