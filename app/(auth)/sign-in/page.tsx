import ServerFunc from "./serverFunc";

type Props = {
  params: {};
  searchParams: { [key: string]: string };
};

export default function Page(props: Props) {
  const searchParams = props.searchParams;

  return <ServerFunc searchParams={searchParams}></ServerFunc>;
}
