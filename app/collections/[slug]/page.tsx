import CollectionPage from "@/components/CollectionPage";

type Props = {
  params: { slug: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const dynamic = "force-dynamic";

export default async function Collection({
  params: { slug },
  searchParams,
}: Props) {
  return <CollectionPage searchParams={searchParams}/>;
}
