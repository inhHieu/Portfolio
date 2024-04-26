"use client"
import Data from '../../../public/data/data.json';
import List from '@/app/components/category/List';
import { usePathname } from "next/navigation";

export default function Movie() {
  const pathname = usePathname();
  const category = pathname.slice(1)

    return (
        <div className=' max-w-[1440px] mx-auto ' >
            <List category={category} data={Data.game} />
        </div>
    )
}
