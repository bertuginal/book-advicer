import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import type { InputRef, TableColumnsType, TableColumnType } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';
import {useBook} from "../context/BookContext.tsx";

interface DataType {
    key: string;
    title: string,
    author: string,
    genre: string,
    category: string,
    description: string
}

interface Book {
    title: string;
    author: string;
    genre: string;
    category: string;
    description: string;
}

type DataIndex = keyof DataType;

const App: React.FC = () => {
    const {books} = useBook()
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);

    const transformBooksData = (books: Book[]) : DataType[] => {
        return books.map((book, index) => ({
            key: String(index + 1),
            title: book.title,
            author: book.author,
            genre: book.genre,
            category: book.category,
            description: book.description
        }));
    }

    const handleSearch = (
        selectedKeys: string[],
        confirm: FilterDropdownProps['confirm'],
        dataIndex: DataIndex,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<DataType> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            width: '30%',
            ...getColumnSearchProps('title'),
        },
        {
            title: 'Author',
            dataIndex: 'author',
            key: 'author',
            width: '20%',
            ...getColumnSearchProps('author'),
        },
        {
            title: 'Genre',
            dataIndex: 'genre',
            key: 'genre',
            ...getColumnSearchProps('genre'),
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            width: '20%',
            ...getColumnSearchProps('category'),
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            width: '20%',
            ...getColumnSearchProps('description'),
        }
    ];

    return (
        <div >
            <Table
                columns={columns}
                dataSource={transformBooksData(books)}
                size={"small"}
                pagination={{
                    pageSize: 5
                }}
                style={{
                    width: "70vw"
                }}
                bordered
                scroll={{y: 400 }}
            />
        </div>
    )
};

export default App;