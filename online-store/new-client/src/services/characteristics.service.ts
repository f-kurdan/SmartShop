import { specification } from '../types';
import { groupBy } from '../utils/groupBy';
export  const getSpecifications = async (categories?: string) => {
    const searchParams = new URLSearchParams();
    if (categories) searchParams.append('categories', categories);
    const res = await fetch(`${process.env.NEXT_PUBLIC_STOREAPI_URL}/specifications?${searchParams}`);
    const specifications = await res.json();

    console.log('specifications: ', specifications);

    const groupedSpecifications: Array<{ name:string, values: specification[] }> = groupBy(specifications, 'name');
    console.log('groupedSpecifications: ', groupedSpecifications);
    return groupedSpecifications
}