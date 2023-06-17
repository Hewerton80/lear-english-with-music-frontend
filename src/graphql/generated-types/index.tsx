import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/client/react/components';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type ArrayIds = {
  values: Array<Scalars['String']['input']>;
};

export type Author = {
  __typename?: 'Author';
  _count?: Maybe<AuthorCount>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type AuthorCount = {
  __typename?: 'AuthorCount';
  songs: Scalars['Int']['output'];
};

export type AuthorCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  songs?: InputMaybe<SongAuthorCreateNestedManyWithoutAuthorInput>;
};

export type AuthorOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  songs?: InputMaybe<SongAuthorOrderByRelationAggregateInput>;
};

export type AuthorRelationFilter = {
  is?: InputMaybe<AuthorWhereInput>;
  isNot?: InputMaybe<AuthorWhereInput>;
};

export type AuthorUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  songs?: InputMaybe<SongAuthorUpdateManyWithoutAuthorNestedInput>;
};

export type AuthorWhereInput = {
  AND?: InputMaybe<Array<AuthorWhereInput>>;
  NOT?: InputMaybe<Array<AuthorWhereInput>>;
  OR?: InputMaybe<Array<AuthorWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  songs?: InputMaybe<SongAuthorListRelationFilter>;
};

export type AuthorWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuthor: Author;
  createSong: Song;
  updateAuthor: Author;
  updateSong: Song;
};


export type MutationCreateAuthorArgs = {
  data: AuthorCreateInput;
};


export type MutationCreateSongArgs = {
  authorIds: ArrayIds;
  data: SongCreateWithoutAuthorsInput;
};


export type MutationUpdateAuthorArgs = {
  data: AuthorUpdateInput;
  where: AuthorWhereUniqueInput;
};


export type MutationUpdateSongArgs = {
  authorIds: ArrayIds;
  data: SongUpdateWithoutAuthorsInput;
  where: SongWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type PaginationInput = {
  currentPage?: InputMaybe<Scalars['Float']['input']>;
  perPage?: InputMaybe<Scalars['Float']['input']>;
};

export type PaginedAuthor = {
  __typename?: 'PaginedAuthor';
  currentPage: Scalars['Float']['output'];
  docs: Array<Author>;
  lastPage: Scalars['Float']['output'];
  next?: Maybe<Scalars['Float']['output']>;
  perPage: Scalars['Float']['output'];
  prev?: Maybe<Scalars['Float']['output']>;
  total: Scalars['Float']['output'];
};

export type PaginedSong = {
  __typename?: 'PaginedSong';
  currentPage: Scalars['Float']['output'];
  docs: Array<Song>;
  lastPage: Scalars['Float']['output'];
  next?: Maybe<Scalars['Float']['output']>;
  perPage: Scalars['Float']['output'];
  prev?: Maybe<Scalars['Float']['output']>;
  total: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  author: Author;
  authors: PaginedAuthor;
  song: Song;
  songs: PaginedSong;
};


export type QueryAuthorArgs = {
  where: AuthorWhereUniqueInput;
};


export type QueryAuthorsArgs = {
  input: PaginationInput;
  orderBy?: InputMaybe<AuthorOrderByWithRelationInput>;
  where?: InputMaybe<AuthorWhereInput>;
};


export type QuerySongArgs = {
  where: SongWhereUniqueInput;
};


export type QuerySongsArgs = {
  orderBy?: InputMaybe<SongOrderByWithRelationInput>;
  paginationInput: PaginationInput;
  where?: InputMaybe<SongWhereInput>;
};

export type Song = {
  __typename?: 'Song';
  _count?: Maybe<SongCount>;
  authors: Array<Author>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  lyric?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type SongAuthorCreateManyAuthorInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  songId: Scalars['String']['input'];
};

export type SongAuthorCreateManyAuthorInputEnvelope = {
  data: Array<SongAuthorCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SongAuthorCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<SongAuthorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SongAuthorCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<SongAuthorCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<SongAuthorCreateManyAuthorInputEnvelope>;
};

export type SongAuthorCreateOrConnectWithoutAuthorInput = {
  create: SongAuthorCreateWithoutAuthorInput;
  where: SongAuthorWhereUniqueInput;
};

export type SongAuthorCreateWithoutAuthorInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  song: SongCreateNestedOneWithoutAuthorsInput;
};

export type SongAuthorListRelationFilter = {
  every?: InputMaybe<SongAuthorWhereInput>;
  none?: InputMaybe<SongAuthorWhereInput>;
  some?: InputMaybe<SongAuthorWhereInput>;
};

export type SongAuthorOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SongAuthorScalarWhereInput = {
  AND?: InputMaybe<Array<SongAuthorScalarWhereInput>>;
  NOT?: InputMaybe<Array<SongAuthorScalarWhereInput>>;
  OR?: InputMaybe<Array<SongAuthorScalarWhereInput>>;
  authorId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  songId?: InputMaybe<StringFilter>;
};

export type SongAuthorSongIdAuthorIdCompoundUniqueInput = {
  authorId: Scalars['String']['input'];
  songId: Scalars['String']['input'];
};

export type SongAuthorUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SongAuthorUpdateManyWithWhereWithoutAuthorInput = {
  data: SongAuthorUpdateManyMutationInput;
  where: SongAuthorScalarWhereInput;
};

export type SongAuthorUpdateManyWithoutAuthorNestedInput = {
  connect?: InputMaybe<Array<SongAuthorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SongAuthorCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<SongAuthorCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<SongAuthorCreateManyAuthorInputEnvelope>;
  delete?: InputMaybe<Array<SongAuthorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SongAuthorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SongAuthorWhereUniqueInput>>;
  set?: InputMaybe<Array<SongAuthorWhereUniqueInput>>;
  update?: InputMaybe<Array<SongAuthorUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: InputMaybe<Array<SongAuthorUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: InputMaybe<Array<SongAuthorUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type SongAuthorUpdateWithWhereUniqueWithoutAuthorInput = {
  data: SongAuthorUpdateWithoutAuthorInput;
  where: SongAuthorWhereUniqueInput;
};

export type SongAuthorUpdateWithoutAuthorInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  song?: InputMaybe<SongUpdateOneRequiredWithoutAuthorsNestedInput>;
};

export type SongAuthorUpsertWithWhereUniqueWithoutAuthorInput = {
  create: SongAuthorCreateWithoutAuthorInput;
  update: SongAuthorUpdateWithoutAuthorInput;
  where: SongAuthorWhereUniqueInput;
};

export type SongAuthorWhereInput = {
  AND?: InputMaybe<Array<SongAuthorWhereInput>>;
  NOT?: InputMaybe<Array<SongAuthorWhereInput>>;
  OR?: InputMaybe<Array<SongAuthorWhereInput>>;
  author?: InputMaybe<AuthorRelationFilter>;
  authorId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  song?: InputMaybe<SongRelationFilter>;
  songId?: InputMaybe<StringFilter>;
};

export type SongAuthorWhereUniqueInput = {
  songId_authorId?: InputMaybe<SongAuthorSongIdAuthorIdCompoundUniqueInput>;
};

export type SongCount = {
  __typename?: 'SongCount';
  authors: Scalars['Int']['output'];
};

export type SongCreateNestedOneWithoutAuthorsInput = {
  connect?: InputMaybe<SongWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SongCreateOrConnectWithoutAuthorsInput>;
  create?: InputMaybe<SongCreateWithoutAuthorsInput>;
};

export type SongCreateOrConnectWithoutAuthorsInput = {
  create: SongCreateWithoutAuthorsInput;
  where: SongWhereUniqueInput;
};

export type SongCreateWithoutAuthorsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lyric?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type SongOrderByWithRelationInput = {
  authors?: InputMaybe<SongAuthorOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lyric?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SongRelationFilter = {
  is?: InputMaybe<SongWhereInput>;
  isNot?: InputMaybe<SongWhereInput>;
};

export type SongUpdateOneRequiredWithoutAuthorsNestedInput = {
  connect?: InputMaybe<SongWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SongCreateOrConnectWithoutAuthorsInput>;
  create?: InputMaybe<SongCreateWithoutAuthorsInput>;
  update?: InputMaybe<SongUpdateWithoutAuthorsInput>;
  upsert?: InputMaybe<SongUpsertWithoutAuthorsInput>;
};

export type SongUpdateWithoutAuthorsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lyric?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type SongUpsertWithoutAuthorsInput = {
  create: SongCreateWithoutAuthorsInput;
  update: SongUpdateWithoutAuthorsInput;
};

export type SongWhereInput = {
  AND?: InputMaybe<Array<SongWhereInput>>;
  NOT?: InputMaybe<Array<SongWhereInput>>;
  OR?: InputMaybe<Array<SongWhereInput>>;
  authors?: InputMaybe<SongAuthorListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  lyric?: InputMaybe<StringNullableFilter>;
  slug?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SongWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAuthorMutationVariables = Exact<{
  authorCreateInput: AuthorCreateInput;
}>;


export type CreateAuthorMutation = { __typename?: 'Mutation', createAuthor: { __typename?: 'Author', id: string } };

export type CreateSongMutationVariables = Exact<{
  data: SongCreateWithoutAuthorsInput;
  authorIds: ArrayIds;
}>;


export type CreateSongMutation = { __typename?: 'Mutation', createSong: { __typename?: 'Song', id: string } };

export type UpdateSongMutationVariables = Exact<{
  authorIds: ArrayIds;
  where: SongWhereUniqueInput;
  data: SongUpdateWithoutAuthorsInput;
}>;


export type UpdateSongMutation = { __typename?: 'Mutation', updateSong: { __typename?: 'Song', id: string } };

export type GetAuthorQueryVariables = Exact<{
  where: AuthorWhereUniqueInput;
}>;


export type GetAuthorQuery = { __typename?: 'Query', author: { __typename?: 'Author', slug: string, name: string, id: string } };

export type GetAuthorsQueryVariables = Exact<{
  input: PaginationInput;
  orderBy?: InputMaybe<AuthorOrderByWithRelationInput>;
  where?: InputMaybe<AuthorWhereInput>;
}>;


export type GetAuthorsQuery = { __typename?: 'Query', authors: { __typename?: 'PaginedAuthor', currentPage: number, perPage: number, total: number, lastPage: number, next?: number | null, prev?: number | null, docs: Array<{ __typename?: 'Author', name: string, slug: string, id: string }> } };

export type GetSongQueryVariables = Exact<{
  where: SongWhereUniqueInput;
}>;


export type GetSongQuery = { __typename?: 'Query', song: { __typename?: 'Song', id: string, lyric?: string | null, slug: string, title: string, url: string, authors: Array<{ __typename?: 'Author', name: string, slug: string, id: string }> } };

export type GetSongsQueryVariables = Exact<{
  paginationInput: PaginationInput;
  orderBy?: InputMaybe<SongOrderByWithRelationInput>;
  where?: InputMaybe<SongWhereInput>;
}>;


export type GetSongsQuery = { __typename?: 'Query', songs: { __typename?: 'PaginedSong', currentPage: number, perPage: number, total: number, lastPage: number, next?: number | null, prev?: number | null, docs: Array<{ __typename?: 'Song', id: string, title: string, slug: string, createdAt: any, url: string, lyric?: string | null, authors: Array<{ __typename?: 'Author', id: string, name: string, slug: string }> }> } };


export const CreateAuthorDocument = gql`
    mutation CreateAuthor($authorCreateInput: AuthorCreateInput!) {
  createAuthor(data: $authorCreateInput) {
    id
  }
}
    `;
export type CreateAuthorMutationFn = Apollo.MutationFunction<CreateAuthorMutation, CreateAuthorMutationVariables>;
export type CreateAuthorComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateAuthorMutation, CreateAuthorMutationVariables>, 'mutation'>;

    export const CreateAuthorComponent = (props: CreateAuthorComponentProps) => (
      <ApolloReactComponents.Mutation<CreateAuthorMutation, CreateAuthorMutationVariables> mutation={CreateAuthorDocument} {...props} />
    );
    
export type CreateAuthorProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateAuthorMutation, CreateAuthorMutationVariables>
    } & TChildProps;
export function withCreateAuthor<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateAuthorMutation,
  CreateAuthorMutationVariables,
  CreateAuthorProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateAuthorMutation, CreateAuthorMutationVariables, CreateAuthorProps<TChildProps, TDataName>>(CreateAuthorDocument, {
      alias: 'createAuthor',
      ...operationOptions
    });
};

/**
 * __useCreateAuthorMutation__
 *
 * To run a mutation, you first call `useCreateAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAuthorMutation, { data, loading, error }] = useCreateAuthorMutation({
 *   variables: {
 *      authorCreateInput: // value for 'authorCreateInput'
 *   },
 * });
 */
export function useCreateAuthorMutation(baseOptions?: Apollo.MutationHookOptions<CreateAuthorMutation, CreateAuthorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAuthorMutation, CreateAuthorMutationVariables>(CreateAuthorDocument, options);
      }
export type CreateAuthorMutationHookResult = ReturnType<typeof useCreateAuthorMutation>;
export type CreateAuthorMutationResult = Apollo.MutationResult<CreateAuthorMutation>;
export type CreateAuthorMutationOptions = Apollo.BaseMutationOptions<CreateAuthorMutation, CreateAuthorMutationVariables>;
export const CreateSongDocument = gql`
    mutation CreateSong($data: SongCreateWithoutAuthorsInput!, $authorIds: ArrayIds!) {
  createSong(data: $data, authorIds: $authorIds) {
    id
  }
}
    `;
export type CreateSongMutationFn = Apollo.MutationFunction<CreateSongMutation, CreateSongMutationVariables>;
export type CreateSongComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateSongMutation, CreateSongMutationVariables>, 'mutation'>;

    export const CreateSongComponent = (props: CreateSongComponentProps) => (
      <ApolloReactComponents.Mutation<CreateSongMutation, CreateSongMutationVariables> mutation={CreateSongDocument} {...props} />
    );
    
export type CreateSongProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateSongMutation, CreateSongMutationVariables>
    } & TChildProps;
export function withCreateSong<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateSongMutation,
  CreateSongMutationVariables,
  CreateSongProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateSongMutation, CreateSongMutationVariables, CreateSongProps<TChildProps, TDataName>>(CreateSongDocument, {
      alias: 'createSong',
      ...operationOptions
    });
};

/**
 * __useCreateSongMutation__
 *
 * To run a mutation, you first call `useCreateSongMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSongMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSongMutation, { data, loading, error }] = useCreateSongMutation({
 *   variables: {
 *      data: // value for 'data'
 *      authorIds: // value for 'authorIds'
 *   },
 * });
 */
export function useCreateSongMutation(baseOptions?: Apollo.MutationHookOptions<CreateSongMutation, CreateSongMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSongMutation, CreateSongMutationVariables>(CreateSongDocument, options);
      }
export type CreateSongMutationHookResult = ReturnType<typeof useCreateSongMutation>;
export type CreateSongMutationResult = Apollo.MutationResult<CreateSongMutation>;
export type CreateSongMutationOptions = Apollo.BaseMutationOptions<CreateSongMutation, CreateSongMutationVariables>;
export const UpdateSongDocument = gql`
    mutation UpdateSong($authorIds: ArrayIds!, $where: SongWhereUniqueInput!, $data: SongUpdateWithoutAuthorsInput!) {
  updateSong(authorIds: $authorIds, where: $where, data: $data) {
    id
  }
}
    `;
export type UpdateSongMutationFn = Apollo.MutationFunction<UpdateSongMutation, UpdateSongMutationVariables>;
export type UpdateSongComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateSongMutation, UpdateSongMutationVariables>, 'mutation'>;

    export const UpdateSongComponent = (props: UpdateSongComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateSongMutation, UpdateSongMutationVariables> mutation={UpdateSongDocument} {...props} />
    );
    
export type UpdateSongProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateSongMutation, UpdateSongMutationVariables>
    } & TChildProps;
export function withUpdateSong<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateSongMutation,
  UpdateSongMutationVariables,
  UpdateSongProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateSongMutation, UpdateSongMutationVariables, UpdateSongProps<TChildProps, TDataName>>(UpdateSongDocument, {
      alias: 'updateSong',
      ...operationOptions
    });
};

/**
 * __useUpdateSongMutation__
 *
 * To run a mutation, you first call `useUpdateSongMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSongMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSongMutation, { data, loading, error }] = useUpdateSongMutation({
 *   variables: {
 *      authorIds: // value for 'authorIds'
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateSongMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSongMutation, UpdateSongMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSongMutation, UpdateSongMutationVariables>(UpdateSongDocument, options);
      }
export type UpdateSongMutationHookResult = ReturnType<typeof useUpdateSongMutation>;
export type UpdateSongMutationResult = Apollo.MutationResult<UpdateSongMutation>;
export type UpdateSongMutationOptions = Apollo.BaseMutationOptions<UpdateSongMutation, UpdateSongMutationVariables>;
export const GetAuthorDocument = gql`
    query GetAuthor($where: AuthorWhereUniqueInput!) {
  author(where: $where) {
    slug
    name
    id
  }
}
    `;
export type GetAuthorComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAuthorQuery, GetAuthorQueryVariables>, 'query'> & ({ variables: GetAuthorQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetAuthorComponent = (props: GetAuthorComponentProps) => (
      <ApolloReactComponents.Query<GetAuthorQuery, GetAuthorQueryVariables> query={GetAuthorDocument} {...props} />
    );
    
export type GetAuthorProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAuthorQuery, GetAuthorQueryVariables>
    } & TChildProps;
export function withGetAuthor<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAuthorQuery,
  GetAuthorQueryVariables,
  GetAuthorProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAuthorQuery, GetAuthorQueryVariables, GetAuthorProps<TChildProps, TDataName>>(GetAuthorDocument, {
      alias: 'getAuthor',
      ...operationOptions
    });
};

/**
 * __useGetAuthorQuery__
 *
 * To run a query within a React component, call `useGetAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthorQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetAuthorQuery(baseOptions: Apollo.QueryHookOptions<GetAuthorQuery, GetAuthorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAuthorQuery, GetAuthorQueryVariables>(GetAuthorDocument, options);
      }
export function useGetAuthorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAuthorQuery, GetAuthorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAuthorQuery, GetAuthorQueryVariables>(GetAuthorDocument, options);
        }
export type GetAuthorQueryHookResult = ReturnType<typeof useGetAuthorQuery>;
export type GetAuthorLazyQueryHookResult = ReturnType<typeof useGetAuthorLazyQuery>;
export type GetAuthorQueryResult = Apollo.QueryResult<GetAuthorQuery, GetAuthorQueryVariables>;
export function refetchGetAuthorQuery(variables: GetAuthorQueryVariables) {
      return { query: GetAuthorDocument, variables: variables }
    }
export const GetAuthorsDocument = gql`
    query GetAuthors($input: PaginationInput!, $orderBy: AuthorOrderByWithRelationInput, $where: AuthorWhereInput) {
  authors(input: $input, orderBy: $orderBy, where: $where) {
    currentPage
    perPage
    total
    lastPage
    next
    prev
    docs {
      name
      slug
      id
    }
  }
}
    `;
export type GetAuthorsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAuthorsQuery, GetAuthorsQueryVariables>, 'query'> & ({ variables: GetAuthorsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetAuthorsComponent = (props: GetAuthorsComponentProps) => (
      <ApolloReactComponents.Query<GetAuthorsQuery, GetAuthorsQueryVariables> query={GetAuthorsDocument} {...props} />
    );
    
export type GetAuthorsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAuthorsQuery, GetAuthorsQueryVariables>
    } & TChildProps;
export function withGetAuthors<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAuthorsQuery,
  GetAuthorsQueryVariables,
  GetAuthorsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAuthorsQuery, GetAuthorsQueryVariables, GetAuthorsProps<TChildProps, TDataName>>(GetAuthorsDocument, {
      alias: 'getAuthors',
      ...operationOptions
    });
};

/**
 * __useGetAuthorsQuery__
 *
 * To run a query within a React component, call `useGetAuthorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthorsQuery({
 *   variables: {
 *      input: // value for 'input'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetAuthorsQuery(baseOptions: Apollo.QueryHookOptions<GetAuthorsQuery, GetAuthorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAuthorsQuery, GetAuthorsQueryVariables>(GetAuthorsDocument, options);
      }
export function useGetAuthorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAuthorsQuery, GetAuthorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAuthorsQuery, GetAuthorsQueryVariables>(GetAuthorsDocument, options);
        }
export type GetAuthorsQueryHookResult = ReturnType<typeof useGetAuthorsQuery>;
export type GetAuthorsLazyQueryHookResult = ReturnType<typeof useGetAuthorsLazyQuery>;
export type GetAuthorsQueryResult = Apollo.QueryResult<GetAuthorsQuery, GetAuthorsQueryVariables>;
export function refetchGetAuthorsQuery(variables: GetAuthorsQueryVariables) {
      return { query: GetAuthorsDocument, variables: variables }
    }
export const GetSongDocument = gql`
    query GetSong($where: SongWhereUniqueInput!) {
  song(where: $where) {
    id
    lyric
    slug
    title
    url
    authors {
      name
      slug
      id
    }
  }
}
    `;
export type GetSongComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetSongQuery, GetSongQueryVariables>, 'query'> & ({ variables: GetSongQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetSongComponent = (props: GetSongComponentProps) => (
      <ApolloReactComponents.Query<GetSongQuery, GetSongQueryVariables> query={GetSongDocument} {...props} />
    );
    
export type GetSongProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetSongQuery, GetSongQueryVariables>
    } & TChildProps;
export function withGetSong<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetSongQuery,
  GetSongQueryVariables,
  GetSongProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetSongQuery, GetSongQueryVariables, GetSongProps<TChildProps, TDataName>>(GetSongDocument, {
      alias: 'getSong',
      ...operationOptions
    });
};

/**
 * __useGetSongQuery__
 *
 * To run a query within a React component, call `useGetSongQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSongQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSongQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetSongQuery(baseOptions: Apollo.QueryHookOptions<GetSongQuery, GetSongQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSongQuery, GetSongQueryVariables>(GetSongDocument, options);
      }
export function useGetSongLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSongQuery, GetSongQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSongQuery, GetSongQueryVariables>(GetSongDocument, options);
        }
export type GetSongQueryHookResult = ReturnType<typeof useGetSongQuery>;
export type GetSongLazyQueryHookResult = ReturnType<typeof useGetSongLazyQuery>;
export type GetSongQueryResult = Apollo.QueryResult<GetSongQuery, GetSongQueryVariables>;
export function refetchGetSongQuery(variables: GetSongQueryVariables) {
      return { query: GetSongDocument, variables: variables }
    }
export const GetSongsDocument = gql`
    query GetSongs($paginationInput: PaginationInput!, $orderBy: SongOrderByWithRelationInput, $where: SongWhereInput) {
  songs(paginationInput: $paginationInput, orderBy: $orderBy, where: $where) {
    currentPage
    perPage
    total
    lastPage
    next
    prev
    docs {
      id
      title
      slug
      createdAt
      url
      authors {
        id
        name
        slug
      }
      lyric
    }
  }
}
    `;
export type GetSongsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetSongsQuery, GetSongsQueryVariables>, 'query'> & ({ variables: GetSongsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetSongsComponent = (props: GetSongsComponentProps) => (
      <ApolloReactComponents.Query<GetSongsQuery, GetSongsQueryVariables> query={GetSongsDocument} {...props} />
    );
    
export type GetSongsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetSongsQuery, GetSongsQueryVariables>
    } & TChildProps;
export function withGetSongs<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetSongsQuery,
  GetSongsQueryVariables,
  GetSongsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetSongsQuery, GetSongsQueryVariables, GetSongsProps<TChildProps, TDataName>>(GetSongsDocument, {
      alias: 'getSongs',
      ...operationOptions
    });
};

/**
 * __useGetSongsQuery__
 *
 * To run a query within a React component, call `useGetSongsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSongsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSongsQuery({
 *   variables: {
 *      paginationInput: // value for 'paginationInput'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetSongsQuery(baseOptions: Apollo.QueryHookOptions<GetSongsQuery, GetSongsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSongsQuery, GetSongsQueryVariables>(GetSongsDocument, options);
      }
export function useGetSongsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSongsQuery, GetSongsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSongsQuery, GetSongsQueryVariables>(GetSongsDocument, options);
        }
export type GetSongsQueryHookResult = ReturnType<typeof useGetSongsQuery>;
export type GetSongsLazyQueryHookResult = ReturnType<typeof useGetSongsLazyQuery>;
export type GetSongsQueryResult = Apollo.QueryResult<GetSongsQuery, GetSongsQueryVariables>;
export function refetchGetSongsQuery(variables: GetSongsQueryVariables) {
      return { query: GetSongsDocument, variables: variables }
    }