import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export interface FilterCheckboxProps {
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (name: string, value: string, checked: boolean) => void;
  checked?: boolean;
  name: string;
  className?: string;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
  name,
  className,
}) => {
  return (
    <div className={cn("flex justify-start items-center space-x-2 mb-3", className)}>

      <Checkbox
        onCheckedChange={(checked) => onCheckedChange?.(name, value, Boolean(checked))}
        checked={checked}
        value={value}
        className="w-4 h-4"
        id={`checkbox-${String(name)}-${String(value)}`}
      />
      
      <label
        htmlFor={`checkbox-${String(name)}-${String(value)}`}
        className="leading-none cursor-pointer font-medium text-[14px] bg-card p-2 rounded-[5px] text-input "
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};