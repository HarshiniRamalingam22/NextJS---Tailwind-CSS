import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = await fetch(`https://api.github.com/search/users?q=tom`).then(
    (res) => res.json()
  );

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product?.items?.[0]?.login,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

export default async function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
