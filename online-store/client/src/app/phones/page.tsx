import FilterContainer from '@/components/products-catalog/filters/filter-container'
import PhonesList from '@/components/products-catalog/lists/phones-list'
import ListContainer from '@/components/products-catalog/lists/list-container'
import React from 'react'
import PhonesFilter from '@/components/products-catalog/filters/phones-filter'
import CatalogContainer from '@/components/products-catalog/catalog-container'

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