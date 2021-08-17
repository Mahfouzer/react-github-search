import React, { useCallback } from 'react'
import SearchInput from '../../components/SearchInput';
import H1 from '../../components/styled/H1';
import Header from '../../components/styled/Header'
import keywordContext from '../../context/keywordContext';

export default function ListingRepos() {


    const handleNewSearch = useCallback(

        (keyword) => {

            //search using search github methods

        },
        [],
    )

    return (
        <div>
            <Header>
                <H1>Github Search App</H1>
                <SearchInput inputChangeHandler={handleNewSearch} />
            </Header>
        </div>
    )
}
