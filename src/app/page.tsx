import { Container } from "@/components/shared/container"
import { Footer } from "@/components/shared/footer"
import { Header } from "@/components/shared/header"
import { Catalog } from "@/features/catalog"
import { Filters } from "@/features/filters"
import { Paginator } from "@/features/pagination"
import { fetchManga } from "@/services/mangaServerApi"
import { fetchTaxonomies } from "@/services/taxonomiesServerApi"
import qs from "qs"

export default async function Home(searchParams: any) {
  const queryString = qs.stringify(searchParams.searchParams, { addQueryPrefix: true })

  const initialFilters = await fetchTaxonomies()
  const initialManga = await fetchManga(queryString)

  return (
    <>
      <Header />
      <main className="mb-7 min-h-[100vh] overflow-hidden">
        <Container className="flex justify-between gap-4 lg-max:justify-center">
          <div className="w-full">
            <Catalog initialManga={initialManga.results} />
            <Paginator initialPages={initialManga.total_pages} />
          </div>
          <Filters initialFilters={initialFilters} />
        </Container>
      </main>
      <Footer />
    </>
  )
}
