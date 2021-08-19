import React, { useCallback, useState } from 'react'
import CardSet from '../../components/CardSet';
import SearchInput from '../../components/SearchInput';
import AnchorButton from '../../components/styled/AnchorButton';
import DropDown from '../../components/styled/DropDown';
import H1 from '../../components/styled/H1';
import Header from '../../components/styled/Header'
import HorizontalFlexContainer from '../../components/styled/HorizontalFlexContainer';
import keywordContext from '../../context/keywordContext';

export default function ListingRepos() {


    const [sortingBy, setSortingBy] = useState('');
    const [orderingBy, setOrderingBy] = useState('');


    const resetFiltering = useCallback(
        (e) => {
            e.preventDefault();
            setOrderingBy('');
            setSortingBy('')
        },
        [],
    )


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

            <HorizontalFlexContainer margin="5%">
                <DropDown value={orderingBy} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { setOrderingBy(e.target.value) }}>
                    <option value='' hidden>Order by</option>
                    <option value="ascending" >ascending </option>
                    <option value="descending">descending </option>
                </DropDown>
                <DropDown value={sortingBy} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { setSortingBy(e.target.value) }}>
                    <option value='' hidden >Sort by</option>
                    <option value="forks">forks </option>
                    <option value="stars">stars </option>
                </DropDown>

                <AnchorButton href="/" margin='15px 0 0 0;' onClick={resetFiltering}> Reset</AnchorButton>
            </HorizontalFlexContainer>
            <CardSet cardsData={[]} />
        </div>
    )
}
