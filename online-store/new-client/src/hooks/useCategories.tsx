import categoryService from '@/services/category.service'
import { useQuery } from 'react-query'

const useCategories = () => useQuery('categories', () => categoryService.getCategories())

export default useCategories