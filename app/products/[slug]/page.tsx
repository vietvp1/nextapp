import GiftCardPage from "@/components/HomePage/gift-card";

type Props = {
  params: { slug: string };
};

export default async function Product({ params: { slug } }: Props) {
  return <GiftCardPage product={{ id: 7682947481761 }} />;
}
