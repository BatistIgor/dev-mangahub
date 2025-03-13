interface Term {
  id: number
  name: string
}

interface Filter {
  taxonomy: string
  label: string
  terms: Term[]
}

interface Props {
  initialFilters: Filter[],
  searchParams: any
}

const useQueryParams = ({ initialFilters,searchParams }: Props) => {
  const taxonomy: { [key: string]: number[] } = {}

  initialFilters.map(filter => {
    taxonomy[filter.taxonomy] = searchParams
      .getAll(filter.taxonomy)
      .flatMap((param: string) => param.split(",").map(Number))
  })

  return taxonomy
}

export default useQueryParams
