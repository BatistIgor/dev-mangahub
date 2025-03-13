import { useState } from "react";

function useLocalFilters(secrch: Record<string, number[]>) {
  const [filters, setFilters] = useState<Record<string, number[]>>(secrch);

  interface FilterOption {
    value: number;
    name: string;
    checked: boolean;
  }

  const updateFilters = (filters: Record<string, number[]>, name: string, value: number) => {
    if (!filters[name]) {
      return { ...filters, [name]: [value] };
    }

    const updatedValues = filters[name].includes(value)
      ? filters[name].filter(id => id !== value)
      : [...filters[name], value];

    if (updatedValues.length === 0) {
      const { [name]: _, ...rest } = filters; 
      return rest;
    }

    return { ...filters, [name]: updatedValues };
  };

  const toggleFilter = ({ name, value }: FilterOption) => {
    setFilters(prevFilters => updateFilters(prevFilters, name, value));
  };

  return { filters, toggleFilter };
}

export default useLocalFilters;