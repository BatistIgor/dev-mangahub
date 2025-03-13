interface Term {
  id: number
  name: string
}

export interface InitialFilter {
  taxonomy: string
  label: string
  terms: Term[]
}

export interface Filters {
  [key: string]: number[]
}
