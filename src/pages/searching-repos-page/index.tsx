import React, { useCallback } from 'react'
import SearchInput from '../../components/SearchInput'
import H1 from '../../components/styled/H1'
import Header from '../../components/styled/Header'
import HorizontalCenteredContainer from '../../components/styled/HorizontalCenteredContainer'
import Img from '../../components/styled/Img'
import history from '../../history'

import logo from '../../logo.svg'

export default function SearchingRepos() {


    const redirectToSearchedList = useCallback(
        () => {
            history.push('/search');
        },
        [],
    )

    return (
        <div>

            <Header>
                <H1>Github Search App</H1>
            </Header>

            <HorizontalCenteredContainer>
                <Img src={logo} alt="github logo" imageWidth={350} imageHeight={350} />
                <SearchInput submitSearchHandler={redirectToSearchedList} />
            </HorizontalCenteredContainer>
        </div>
    )
}
