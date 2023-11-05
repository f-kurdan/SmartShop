import { ChangeEvent } from "react"

class FilterService {
    handleChange = (e: ChangeEvent<HTMLInputElement>, setSelectedOptions: (value: React.SetStateAction<string[]>) => void,
    selectedOptions:string[]) => {
        if (e.target.checked) {
            setSelectedOptions([...selectedOptions, e.target.id])
        } else {
            setSelectedOptions(selectedOptions.filter(option => option !== e.target.id))
        }
      }
}

export default new FilterService()