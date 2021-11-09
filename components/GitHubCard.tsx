import Link from "next/link";

export default function GitHubCard(props: {response: Record<string, unknown>}) {
  const { response } = props;
  return <div className="flex w-96 flex-col gap-y-2 p-4 bg-70 rounded-md">
    <div className="flex items-center gap-x-4">
      <Link href={response.html_url}><a className="font-bold text-lg underline">{response.name}</a></Link>
      <p className="text-gray-200 text-xs">{response.language}</p>
    </div>
    <p>{response.description}</p>
  </div>;
}