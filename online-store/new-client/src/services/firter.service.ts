import { ChangeEvent } from "react"

class FilterService {
    handleChange = (e: ChangeEvent<HTMLInputElement>, setSelectedOptions: (value: React.SetStateAction<string[]>) => void,
    selectedOptions:string[]) => {
        if (e.target.checked) {
            setSelectedOptions([...selectedOptions, e.target.value])
        } else {
            setSelectedOptions(selectedOptions.filter(characteristic => characteristic !== e.target.value))
        }
      }
}

export default new FilterService()