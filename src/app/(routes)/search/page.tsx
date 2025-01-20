import SearchForm from "@/components/SearchForm";
import SearchResults from "@/components/SearchResults";
import { Suspense } from "react";

export default async function SearchPage({
  searchParams
}: {
  searchParams:Promise<{ query: string }>;
}) {

  const query = (await searchParams).query;

  return (
    <div className="w-full">
      <div className="max-w-md mx-auto">
        <SearchForm />
        { typeof query !== "undefined" && (
          <Suspense fallback="loading...">
            <SearchResults query={query} />
          </Suspense>
        )}
      </div>
    </div>
  );
}
