import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ChangeEvent } from "react"

class FilterService {
    handleFilterChange = (e: ChangeEvent<HTMLInputElement>, params: URLSearchParams, router:AppRouterInstance, searchParam:string) => {
        if (e.target.checked) {
            if (params.has(searchParam)) {
                const prevParams = params.get(searchParam)?.toString();
            console.log('prevParams: ' + prevParams)
                params.set(searchParam, !!prevParams ? `${prevParams};${e.target.id}` : e.target.id);
                console.log('new params: ' + params.get(searchParam)?.split(';'))
            }
            else {
                params.set(searchParam, e.target.id)
                console.log('new params: ' + params.get(searchParam))
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

        params.delete('page') 
        // router.replace(`/catalog?${params.toString()}`);
    };
}

export default new FilterService()