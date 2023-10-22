import CatalogContainer from '@/components/products-catalog/catalog-container'
import FilterContainer from '@/components/products-catalog/filters/filter-container'
import HeadphoneFilter from '@/components/products-catalog/filters/headphone-filter'
import HeadphonesList from '@/components/products-catalog/lists/headphones-list'
import ListContainer from '@/components/products-catalog/lists/list-container'
import React from 'react'

const Page = () => {
  return (
    <CatalogContainer>
      <FilterContainer >
        <HeadphoneFilter/>     
      </FilterContainer>
      <ListContainer>
        <HeadphonesList />
      </ListContainer>
    </CatalogContainer>
  )
}

export default Page