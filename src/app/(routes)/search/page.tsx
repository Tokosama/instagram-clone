import { auth } from "@/auth";
import Preloader from "@/components/Preloader";
import LoginInterface from "@/components/LoginInterface";
import SearchForm from "@/components/SearchForm";
import SearchResults from "@/components/SearchResults";
import { Suspense } from "react";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const query = (await searchParams).query;
  const session = await auth();

  return (
    <>
      <div className="h-full">
        {session && (
          <div className="w-full">
            <div className="max-w-md mx-auto">
              <SearchForm />
              
                <Suspense fallback={<Preloader />}>
                  <SearchResults query={query} />
                </Suspense>
            </div>
          </div>
        )}

        {!session && (
          <LoginInterface />
        )}
      </div>
    </>
  );
}
