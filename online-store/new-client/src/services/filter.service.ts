import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ChangeEvent } from "react"

class FilterService {
    handleFilterChange = (e: ChangeEvent<HTMLInputElement>, params: URLSearchParams, router:AppRouterInstance, pathName:string) => {
        console.log(`in handleFilterChange render: ${pathName}?${params.toString()} ${e.target.id}`)
        if (e.target.checked) {
            if (params.has(pathName)) {
                const prevParams = params.get(pathName)?.toString();
                params.set(pathName, !!prevParams ? `${prevParams};${e.target.id}` : e.target.id);
            }
            else {
                params.set(pathName, e.target.id)
            }
        }
        else {
            let paramsArr = params.get(pathName)?.split(';')
            paramsArr = paramsArr?.filter(p => !(p === e.target.id))

            if (paramsArr && paramsArr.length)
                params.set(pathName, paramsArr.join(';'));
            else
                params.delete(pathName)
        }

        console.log(`вот так вот ${pathName}: ` + params.get(pathName))
        params.delete('page') 
        // router.replace(`/catalog?${params.toString()}`);
    };
}

export default new FilterService()