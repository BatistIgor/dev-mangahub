import React from 'react';
import { cn } from '@/lib/utils'

interface Props {
  className?: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
  activeTab: string
}

export const Tabs: React.FC<Props> = ({ className, setActiveTab, activeTab}) => {
  return (
    <div className={cn('flex gap-6 text-sm font-semibold',className)}>
         <button
            className={`pb-2 ${activeTab === "Онисание" ? "relative text-activeTab before:absolute before:bottom-[-1px] before:left-0 before:h-[2px] before:w-full before:bg-button" : ""}`}
            onClick={() => setActiveTab("Онисание")}
          >
            Описание
          </button>
          <button
            className={`pb-2 ${activeTab === "Главы" ? "relative text-activeTab before:absolute before:bottom-[-1px] before:left-0 before:h-[2px] before:w-full before:bg-button" : ""}`}
            onClick={() => setActiveTab("Главы")}
          >
            Главы
          </button>
          <button
            className={`pb-2 ${activeTab === "Коментарии" ? "relative text-activeTab before:absolute before:bottom-[-1px] before:left-0 before:h-[2px] before:w-full before:bg-button" : ""}`}
            onClick={() => setActiveTab("Коментарии")}
          >
            Комментарии
          </button>
    </div>
  );
};