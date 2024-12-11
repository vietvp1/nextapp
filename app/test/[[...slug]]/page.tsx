import CollectionPage from "@/components/CollectionPage";

type Props = {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const dynamic = "force-dynamic";

export default async function Collection(props: Props) {
  const searchParams = await props.searchParams;
  const params = await props.params;

  const {
    slug
  } = params;

  return <CollectionPage searchParams={searchParams} />;
}
