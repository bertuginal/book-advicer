import React, {createContext, ReactNode, useContext, useEffect, useState} from "react";
import axios from "axios";

export interface BookData {
    title: string,
    author: string,
    genre: string,
    category: string,
    description: string
}

export interface HistoryBookData {
    id: string,
    question: string,
    books: BookData[]
}

interface BookContextData {
    books: BookData[],
    setBooks: React.Dispatch<React.SetStateAction<BookData[]>>,
    historyBooks: HistoryBookData[],
    setHistoryBooks: React.Dispatch<React.SetStateAction<HistoryBookData[]>>,
    selectedBook: string,
    setSelectedBook: React.Dispatch<React.SetStateAction<string>>,
    booksLoading: boolean,
    setBooksLoading: React.Dispatch<React.SetStateAction<boolean>>,
    historyBooksLoading: boolean,
    setHistoryBooksLoading: React.Dispatch<React.SetStateAction<boolean>>,
    isFormModalOpen: boolean,
    setIsFormModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface BookProviderProps {
    children: ReactNode
}

const initialValues: BookContextData = {
    books: [],
    setBooks: (): void => {},
    historyBooks: [],
    setHistoryBooks: (): void => {},
    historyBooksLoading: false,
    setHistoryBooksLoading: (): void => {},
    selectedBook: "",
    setSelectedBook: (): void => {},
    booksLoading: false,
    setBooksLoading: (): void => {},
    isFormModalOpen: false,
    setIsFormModalOpen: (): void => {}
}

const BookContext: React.Context<BookContextData> = createContext<BookContextData>(initialValues);

// eslint-disable-next-line react-refresh/only-export-components
export const useBook = (): BookContextData => {
    return useContext(BookContext)
}

export const BookProvider: React.FC<BookProviderProps> = ({children}) => {
    const [books, setBooks] = useState<BookData[]>([])
    const [historyBooks, setHistoryBooks] = useState<HistoryBookData[]>([])
    const [selectedBook, setSelectedBook] = useState<string>("")
    const [booksLoading, setBooksLoading] = useState<boolean>(false)
    const [historyBooksLoading, setHistoryBooksLoading] = useState<boolean>(false)
    const [isFormModalOpen, setIsFormModalOpen] = useState<boolean>(false)

    useEffect(() => {
        axios.get("http://localhost:8080/books")
            .then(async (response) => {
                const data: HistoryBookData[] = await response.data.data
                setHistoryBooks(data)
            })
            .catch((error) => {
                console.log("Error : ", error)
            })
            .finally(() => {
                setHistoryBooksLoading(true)
            })
    }, [books])

    const data: BookContextData = {
        books,
        setBooks,
        historyBooks,
        setHistoryBooks,
        selectedBook,
        setSelectedBook,
        booksLoading,
        setBooksLoading,
        historyBooksLoading,
        setHistoryBooksLoading,
        isFormModalOpen,
        setIsFormModalOpen
    }

    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    )
}