import React, { useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'
import history from '../../history'
import Form from '../styled/Form'
import Input from '../styled/Input'
import SearchIcon from '../styled/SearchIcon'

export default function SearchInput({ inputChangeHandler = () => null, ...restProps }: any) {


    const { name }: { name: string } = useParams();
    const [searchKeyword, setSearchKeyword] = useState(name);

    const redirectToSearchedList = useCallback(
        (e: React.SyntheticEvent) => {
            e.preventDefault();
            if (searchKeyword) {
                history.push(`/search/${searchKeyword}`)
            } else {
                history.push('/')
            }
        },
        [searchKeyword],
    )

    const handleSearchKeywordChange = useCallback(
        (e) => {
            setSearchKeyword(e.target.value);
            inputChangeHandler(e.target.value);
        }
        ,
        [inputChangeHandler],
    )


    return (
        <Form onSubmit={redirectToSearchedList}>
            <SearchIcon type="submit" />
            <Input   {...restProps} onChange={handleSearchKeywordChange} defaultValue={searchKeyword || ''} hasLeftIcon />
        </Form>
    )
}
