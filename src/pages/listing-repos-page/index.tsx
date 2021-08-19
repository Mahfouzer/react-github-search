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

    const searchGithubRepos = async () => {
        if (!keyWord) {
            setError('Please write the name of the repo you want to search');
            return;
        }

        try {
            setLoading(true);
            const result = await fetch(`https://api.github.com/search/repositories?q=${keyWord}${sortingBy && `&sort=${sortingBy}`}${orderingBy && `&order=${orderingBy}`}`);
            if (!result.ok) {
                throw new Error()
            } else {
                setError('');
            }
            return result;
        } catch (e) {
            setError('Something went wrong, please try again later');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        searchGithubRepos();
    }, [sortingBy, orderingBy, keyWord])

    const handleNewSearch = useCallback(

        (keyword) => {
            searchGithubRepos();
        },
        [],
    )


    return (
        <div>
            <Header>
                <H1>Github Search App</H1>
                <SearchInput inputChangeHandler={handleNewSearch} />
            </Header>

            {isLoading ? <CenteredTextContainer> <H1>Loading ...</H1> </CenteredTextContainer> :

                error ? <CenteredTextContainer> <H1>{error}</H1> </CenteredTextContainer> :
                    <>
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
                    </>
            }
        </div>
    )
}
