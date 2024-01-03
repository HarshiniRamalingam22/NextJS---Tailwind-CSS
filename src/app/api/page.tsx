import { fetchData } from "@/utils/fetchData";

export default function Home() {
  const pageData = fetchData("https://api.github.com/search/users?q=tom");
  console.log("data ===> ", pageData);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Hello API</div>
    </main>
  );
}
