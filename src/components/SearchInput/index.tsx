import React, { useCallback, useContext } from 'react'
import keywordContext from '../../context/keywordContext'
import Form from '../styled/Form'
import Input from '../styled/Input'
import SearchIcon from '../styled/SearchIcon'

interface SearchActionProps { inputChangeHandler?: (() => void) | null; submitSearchHandler?: (() => void) | null; }
type SearchInputProps = SearchActionProps & React.HTMLAttributes<HTMLInputElement>

export default function SearchInput({ inputChangeHandler = null, submitSearchHandler = null, ...restProps }: SearchInputProps) {


    const { keyWord, setKeyWord } = useContext(keywordContext);


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
