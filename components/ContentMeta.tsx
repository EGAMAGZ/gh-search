import { Head } from "$fresh/runtime.ts";

interface ContentMetaProps {
  title: string;
  noAppendTitle?: boolean;
  description?: string;
}

export default function ContentMeta(
  { title, noAppendTitle, description }: ContentMetaProps,
) {
  if (!title.endsWith("| GH Search") && !noAppendTitle) {
    title = `${title} | GH Search`;
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:title" content={title} />
      <meta property="og:title" content={title} />
  
      {description && (
        <>
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
          <meta name="description" content={description} />
        </>
      )}

      <meta property="og:site_name" content="Deno" />
    </Head>
  );
}
