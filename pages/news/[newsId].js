import { useRouter } from "next/router";

const DetailsPage = () => {
  const route = useRouter();
  const id = route.query.newsId;

  return (
    <>
      <h1>The Detail Page</h1>
    </>
  );
};

export default DetailsPage;
