import { FormAuthor } from "../../components/commomPages/FormAuthor";
import { FormSong } from "../../components/commomPages/FormSong";
import { Breadcrumbs } from "hikari-ui";
import { Link } from "react-router-dom";

export default function CreateSongPage() {
  return (
    <div className="flex flex-col max-w-7xl w-full space-y-2">
      <Breadcrumbs>
        <Breadcrumbs.Link href="/" asChild>
          <Link to="/">Home</Link>
        </Breadcrumbs.Link>
        <Breadcrumbs.Link href="/create-author">Criar Música</Breadcrumbs.Link>
      </Breadcrumbs>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8">
          <FormSong />
        </div>
        <div className="col-span-12 md:col-span-4 h-fit">
          <FormAuthor />
        </div>
      </div>
    </div>
  );
}
