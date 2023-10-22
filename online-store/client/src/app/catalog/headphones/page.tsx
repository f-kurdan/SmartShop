import CatalogContainer from '@/components/products-catalog/catalog-container'
import FilterContainer from '@/components/products-catalog/filters/filter-container'
import PhonesFilter from '@/components/products-catalog/filters/phones-filter'
import ListContainer from '@/components/products-catalog/lists/list-container'
import PhonesList from '@/components/products-catalog/lists/phones-list'
import React from 'react'

const Page = () => {
  return (
    <CatalogContainer>
      <FilterContainer >
        <PhonesFilter/>     
      </FilterContainer>
      <ListContainer>
        <PhonesList />
      </ListContainer>
    </CatalogContainer>
  )
}

export default Page