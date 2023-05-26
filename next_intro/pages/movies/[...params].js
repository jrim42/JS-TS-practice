import { useRouter } from "next/router";
import HeadTitle from "../../components/HeadTitle";

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params || [];

  return (
    <div>
      <HeadTitle title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export async function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
