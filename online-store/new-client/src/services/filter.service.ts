import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ChangeEvent } from "react"

class FilterService {
    handleFilterChange = (e: ChangeEvent<HTMLInputElement>, params: URLSearchParams, router:AppRouterInstance, searchParam:string) => {
        console.log('checked?: ' + e.target.checked)
        if (e.target.checked) {
            console.log(`${searchParam}: ` + params.has(searchParam))
            if (params.has(searchParam)) {
                const prevParams = params.get(searchParam)?.toString();
                params.set(searchParam, !!prevParams ? `${prevParams};${e.target.id}` : e.target.id);
            }
            else {
                params.set(searchParam, e.target.id)
            }
        }
        else {
            let paramsArr = params.get(searchParam)?.split(';')
            paramsArr = paramsArr?.filter(p => !(p === e.target.id))

            if (paramsArr && paramsArr.length)
                params.set(searchParam, paramsArr.join(';'));
            else
                params.delete(searchParam)
        }

        console.log(`вот так вот ${searchParam}: ` + params.get(searchParam))
        params.delete('page') 
        // router.replace(`/catalog?${params.toString()}`);
    };
}

export default new FilterService()