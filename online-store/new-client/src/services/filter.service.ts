import { ChangeEvent } from "react"

class FilterService {
    handleFilterChange = (e: ChangeEvent<HTMLInputElement>, params: URLSearchParams, pathName:string) => {
        if (e.target.checked) {
            if (params.has(pathName)) {
                const prevParams = params.get(pathName)?.toString();
                params.set(pathName, !!prevParams ? `${prevParams};${e.target.value}` : e.target.value);
            }
            else {
                params.set(pathName, e.target.value)
            }
        }
        else {
            let paramsArr = params.get(pathName)?.split(';')
            paramsArr = paramsArr?.filter(p => !(p === e.target.value))

            if (paramsArr?.length)
                params.set(pathName, paramsArr.join(';'));
            else
                params.delete(pathName)
        }

        params.delete('page') 
    };
}

export default new FilterService()