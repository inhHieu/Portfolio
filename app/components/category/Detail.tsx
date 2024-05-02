import DetailClient from './DetailClient';
import { createClient } from "@/utils/supabase/server";

interface DetailProps {
    paramID: string;
}

export default async function Detail({ paramID }: DetailProps) {


    const ID = parseInt(paramID);

    interface Item {
        id: number;
        name: string;
        sum: string;
        genre: string;
        rating: string;
        platforms: string[];
        poster: string;
        lposter: string;
        images: string[];
    }


    const supabase = createClient();
    const { data: rcm, error } = await supabase
        .from("recommendation")
        .select(
            `
            id,
            name,
            sum,
            genre,
            rating,
            platforms,
            poster,
            lposter,
            images
            `
        ).eq('id', ID);

    if (rcm && rcm.length > 0) {
        const item: Item = {
          id: rcm[0].id,
          name: rcm[0].name,
          sum: rcm[0].sum,
          genre: rcm[0].genre,
          rating: rcm[0].rating,
          platforms: rcm[0].platforms,
          poster: rcm[0].poster,
          lposter: rcm[0].lposter,
          images: rcm[0].images,
        };
        return <DetailClient item={item} />
    }
    return <div>dummy text</div>
}