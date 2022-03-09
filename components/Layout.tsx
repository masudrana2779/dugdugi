import Head from "next/head";
import React, { FC, ReactElement } from "react";
import { Main, MainBody } from "./styledComponents/global.styled";

type LayoutProps = {
  children?: ReactElement;
  title?: string;
  tags?: string;
  description?: string;
  imageUrl?: string;
  url?: string;
};

const Layout: FC<LayoutProps> = ({
  children,
  title,
  tags,
  description,
  imageUrl,
  url,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "Cinespot"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="live Entertainment ltd." />
        <meta
          name="description"
          content={
            description ||
            "Based on a true story- A group of robbers broke into a house at night with the intention of committing robbery.  The house was inhabited by two young girls and a disabled child and their mother.  Not getting the desired money, the robbers started torturing them.  And they were raped them more than once and after the rape everyone was killed by cutting their throats"
          }
        />
        <meta
          name="keywords"
          content={
            tags ||
            "Cinespot, Movie, Bangla Movie, Web Series, Drama,janowar, taskeen rahman,rashed mamun apu,farhad limon,elina shammi,monmon ahmed,ariya arittra,, drama, janowar, 2021, janowar,thriller,action,taskeen rahman,rashed mamun apu,farhad limon,elina shammi,monmon ahmed,ariya arittra "
          }
        />
        <meta name="subtitle" content="Cinespot Portal" />

        <meta name="fb:page_id" content="fb id" />
        <meta name="og:title" content={title || "Cinespot"} />
        <meta name="og:type" content="admin" />
        <meta name="og:url" content={url || "https://cinespot.com/"} />
        <meta
          property="og:image"
          content={imageUrl || "/assets/img/share_Banner.png"}
        />
        <meta name="og:site_name" content="boilerplate" />
        <meta
          name="og:description"
          content={
            description || "Diego Carlos' second yellow card against Granada"
          }
        />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/assets/img/favicon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/assets/img/favicon.png"
        />
        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />
      </Head>
      <Main>
        <MainBody>{children}</MainBody>
      </Main>
    </>
  );
};

export default Layout;
