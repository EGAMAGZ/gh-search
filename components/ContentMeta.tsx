import { Head } from "$fresh/runtime.ts";
import { DEFAULT_KEYWORDS } from "../data/meta.ts";

interface ContentMetaProps {
  title: string;
  noAppendTitle?: boolean;
  description?: string;
  keywords?: string[];
}

export default function ContentMeta(
  { title, noAppendTitle, description, keywords = DEFAULT_KEYWORDS }:
    ContentMetaProps,
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
      <meta name="keywords" content={keywords.join(",")} />
    </Head>
  );
}
