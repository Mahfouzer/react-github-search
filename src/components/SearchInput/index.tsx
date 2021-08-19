import React, { useCallback, useContext, useEffect, useState } from 'react'
import keywordContext from '../../context/keywordContext'
import history from '../../history'
import Form from '../styled/Form'
import Input from '../styled/Input'
import SearchIcon from '../styled/SearchIcon'

export default function SearchInput({ inputChangeHandler = null, submitSearchHandler = null, ...restProps }: any) {


    const { keyWord, setKeyWord } = useContext(keywordContext);


    useEffect(() => {
        return () => {
            setKeyWord('');
        }
    }, []);


    const redirectToSearchedList = useCallback(
        (e: React.SyntheticEvent) => {
            e.preventDefault();
            if (submitSearchHandler) {
                submitSearchHandler();
            }
        },
        [submitSearchHandler],
    )

    const handleSearchKeywordChange = useCallback(
        (e: any) => {
            setKeyWord(e.target.value);
            if (inputChangeHandler) {
                inputChangeHandler();
            }
        },
        [inputChangeHandler, setKeyWord],
    )


    return (
        <Form onSubmit={redirectToSearchedList}>
            <SearchIcon type="submit" />
            <Input   {...restProps} onChange={handleSearchKeywordChange} defaultValue={keyWord || ''} hasLeftIcon />
        </Form>
    )
}
