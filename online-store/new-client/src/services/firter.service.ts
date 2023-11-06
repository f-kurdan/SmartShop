import { productsList } from "@/types"
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

    //   filterProducts(products:productsList) {
    //     if (selectedCategories.length > 0) {
    //         products = products.filter(product => selectedCategories.includes(product.category_id.toString()))
    //       }
        
    //       if (selectedBrands.length > 0) {
    //         products = products.filter(product => selectedBrands.includes(product.brand_id.toString()))
    //       }
        
    //       if (selectedCharacteristics.length > 0) {
    //         for (let i = 0; i < selectedCharacteristics.length; i++) {
    //           products = products.filter(prod => prod.characteristics.some(char => selectedCharacteristics[i] === char.value))
    //         }
    //       }
    //   }
}

export default new FilterService()