import ky from "ky";
import { FC } from "react";
import { GetServerSideProps } from "next";
import { get } from "@vercel/edge-config";

type PageProps = { greeting: string | undefined };

const Page: FC<PageProps> = ({ greeting }) => {
  const onClick = () => ky.post("/api/increment").json();
  return (
    <div>
      <h1>Hello {greeting ?? "World"}</h1>
      <button onClick={onClick}>increment page counter</button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  return { props: { greeting: await get("greeting") } };
};

export default Page;
