import { FaDiscord, FaEnvelope, FaGithub, FaTwitter } from "react-icons/fa";
import Gradient from "rgt";
import GitHubCard from "../components/GitHubCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function IndexPage() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/0sean/starred").then(r => {
      r.json().then(j => {
        setRepos(j);
      });
    });
  }, []);

  return <><div className="flex text-white bg-90 h-screen items-center">
    <div className="flex flex-col px-8 md:px-16 gap-y-8">
      <CopyToClipboard text="hi@sean.tn"><a href="#" data-tip="sean@dev.ovh<br/>click to copy"><FaEnvelope size={24} /></a></CopyToClipboard>
      <Link href="https://github.com/devsean"><a><FaGithub size={24} /></a></Link>
      <Link href="https://twitter.com/devsean"><a><FaTwitter size={24} /></a></Link>
      <CopyToClipboard text="Anidox#6280"><a href="#" data-tip="Sean.#6280<br/>click to copy"><FaDiscord size={24} /></a></CopyToClipboard>
      <ReactTooltip place="right" type="dark" effect="solid" multiline border />
    </div>
    <div className="flex flex-col gap-y-2">
      <h1 className="font-bold text-4xl">Hi, I'm <Gradient dir="left-to-right" from="#8e2de2" to="#4a00e0">Sean</Gradient>.</h1>
      <h2 className="font-bold text-3xl">A developer from the UK.</h2>
    </div>
  </div>
  <div className="flex flex-col gap-y-4 px-16 py-8 bg-80 text-white">
    <h1 className="font-bold text-2xl">Projects</h1>
    <div className="flex flex-wrap gap-y-2 gap-x-2">
      {!repos[0] ? <p>Loading...</p> : <>{repos.filter(r => r.owner.login == "Anidox").sort((b, a) => Date.parse(a.pushed_at) - Date.parse(b.pushed_at)).map(r => <GitHubCard key={r.name} response={r} />)}</>}
    </div>
    <Link href="https://github.com/devsean"><a className="font-bold text-lg underline">See more on GitHub</a></Link>
  </div>
  <div className="flex flex-col gap-y-4 bg-90 text-center py-8 text-white">
    <p className="font-bold">2021 Sean.</p>
    <p>This website is <Link href="https://github.com/devsean/website"><a className="underline">open source</a></Link>.</p>
  </div>
  </>;
}
