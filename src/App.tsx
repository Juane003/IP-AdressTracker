import { ChangeEvent, FormEvent, useState } from "react";
import headerPattern from "../src/assets/pattern-bg-desktop.png";
import { DataPanel } from "./components/DataPanel";
import { Search } from "./components/Search";
import { useQuery } from "react-query";
import { getData } from "./api/api";

const IP_API_KEY = `https://geo.ipify.org/api/v2/country?apiKey=at_hrTpqV24lUOmTW6FRRTETfiD4wKqC`;

const App = () => {
  const [ipSearch, setIpSearch] = useState("");
  const { data, refetch, isLoading, isError } = useQuery({
    queryKey: ["ip", ipSearch],
    queryFn: () => getData(`${IP_API_KEY}&ipAddress=${ipSearch}`),
    enabled: false,
  });

  const handleOnSearchChange = (event: ChangeEvent<HTMLInputElement>) =>
    setIpSearch(event.target.value);

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!ipSearch) return;
    refetch();
  };
  return (
    <main className="flex min-h-screen font-rubik">
      <div className="text-white relative w-full flex justify-center ">
        <img src={headerPattern} className="h-64 w-full absolute -z-10" />
        <div className="flex flex-col gap-8 items-center">
          <h1 className="text-3xl font-bold pt-8">IP Address Tracker</h1>
          <Search
            placeholder="Search for any IP address or domain"
            onChange={handleOnSearchChange}
            onSubmit={handleOnSubmit}
          />
          <DataPanel
            ipAddress={data?.ip}
            location={`${data?.location.country || ""}${data ? "," : ""} ${
              data?.location.region || ""
            }`}
            timezone={data?.location.timezone}
            isp={data?.isp}
          />
          <div className="text-black">{data && JSON.stringify(data)}</div>
        </div>
      </div>
    </main>
  );
};

export default App;
