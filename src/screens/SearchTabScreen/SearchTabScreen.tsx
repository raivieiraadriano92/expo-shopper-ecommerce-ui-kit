import { useCallback, useState } from 'react'

import { Headers } from 'src/components'
import { TabStackScreenComponent } from 'src/navigation'

import { SearchFilters } from './SearchFilters'
import { SearchHistory } from './SearchHistory'
import { SearchProductList } from './SearchProductList'

export const SearchTabScreen: TabStackScreenComponent<'Cart'> = ({ navigation }) => {
  const [searchMode, setSearchMode] = useState(false)

  const [showFilters, setShowFilters] = useState(false)

  const closeFilters = useCallback(() => setShowFilters(false), [])

  const openFilters = useCallback(() => setShowFilters(true), [])

  const turnOffSearchMode = useCallback(() => setSearchMode(false), [])

  const turnOnSearchMode = useCallback(() => setSearchMode(true), [])

  return (
    <>
      <Headers.SearchBar
        active={searchMode}
        onActive={turnOnSearchMode}
        onInactive={turnOffSearchMode}
        openFilters={openFilters}
      />
      {searchMode ? <SearchProductList /> : <SearchHistory />}
      <SearchFilters close={closeFilters} visible={showFilters} />
    </>
  )
}
