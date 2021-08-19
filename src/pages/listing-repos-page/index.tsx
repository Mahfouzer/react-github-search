import React, { useCallback, useContext, useEffect, useState } from 'react'
import CardSet from '../../components/CardSet';
import SearchInput from '../../components/SearchInput';
import AnchorButton from '../../components/styled/AnchorButton';
import CenteredTextContainer from '../../components/styled/CenteredTextContainer';
import DropDown from '../../components/styled/DropDown';
import H1 from '../../components/styled/H1';
import Header from '../../components/styled/Header'
import HorizontalFlexContainer from '../../components/styled/HorizontalFlexContainer';
import keywordContext from '../../context/keywordContext';
import { URL } from '../../constants';

export default function ListingRepos() {

    const { keyWord } = useContext(keywordContext);
    const [sortingBy, setSortingBy] = useState('');
    const [orderingBy, setOrderingBy] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [reposList, setReposList] = useState([]);


    const resetFiltering = useCallback(
        (e) => {
            e.preventDefault();
            setOrderingBy('');
            setSortingBy('');
            setReposList([]);
        },
        [],
    )

    // it would be better if we made this a util function and exported it from other file
    const searchGithubRepos = async () => {
        setLoading(true);
        setError('');

        if (!keyWord) {
            setReposList([]);
            setError('Please write the name of the repo you want to search');
            setLoading(false);
            return;
        }

        fetch(`${URL}search/repositories?q=${keyWord}${sortingBy && `&sort=${sortingBy}`}${orderingBy && `&order=${orderingBy}`}`)
            .then(function (response) {
                if (!response.ok || response.status !== 200) {
                    throw new Error()
                }
                return response.json();
            }).then(function (data) {
                setReposList(data.items);
            }).catch(() => {
                setError('Something went wrong, please try again later');
                setReposList([]);
            }).finally(() => {
                setLoading(false);
            })
    }

    useEffect(() => {
        searchGithubRepos();
    }, [sortingBy, orderingBy, keyWord])

    const handleNewSearch = useCallback(
        () => {
            searchGithubRepos();
        },
        [],
    )


    return (
        <div>
            {/*header section*/}
            <Header>
                <H1>Github Search App</H1>
                <SearchInput inputChangeHandler={handleNewSearch} />
            </Header>

            {isLoading && <CenteredTextContainer> <H1>Loading ...</H1> </CenteredTextContainer>}
            {error && !isLoading && <CenteredTextContainer> <H1>{error}</H1> </CenteredTextContainer>}

            {!isLoading && !error &&
                <>
                    {/*filter section*/}
                    <HorizontalFlexContainer margin="5%">
                        <DropDown value={orderingBy} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { setOrderingBy(e.target.value) }}>
                            <option value='' hidden>Order by</option>
                            <option value="asc" >ascending </option>
                            <option value="desc">descending </option>
                        </DropDown>
                        <DropDown value={sortingBy} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { setSortingBy(e.target.value) }}>
                            <option value='' hidden >Sort by</option>
                            <option value="forks">forks </option>
                            <option value="stars">stars </option>
                        </DropDown>

                        <AnchorButton href="/" margin='15px 0 0 0;' onClick={resetFiltering}> Reset</AnchorButton>
                    </HorizontalFlexContainer>


                    {/*Cards section*/}
                    <CardSet cardsData={reposList} />

                </>}
        </div>
    )
}
