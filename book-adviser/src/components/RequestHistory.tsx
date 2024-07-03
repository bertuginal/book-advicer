import React from 'react';
import {Avatar, Button, List, Skeleton} from 'antd';
import {BookData, useBook} from "../context/BookContext.tsx";
import historyIcon from "../assets/old-paper.png"
import styles from '../pages/styles.module.css';

const RequestHistory: React.FC = () => {
    const {
        historyBooks,
        historyBooksLoading,
        setBooks,
        setBooksLoading
    } = useBook()

    const handleViewAnswer = (books: BookData[]): void => {
        setBooksLoading(true)
        setTimeout(() => {
            setBooks(books)
            setBooksLoading(false)
        }, 3000)
    }

    return (
        <List
            className={`${styles.historyBookLoadList}`}
            loading={!historyBooksLoading}
            itemLayout="horizontal"
            dataSource={historyBooks}
            renderItem={(item, index) => (
                <List.Item
                    className={styles.historyBookListItem}
                    actions={
                        [
                            <Button
                                type={"primary"}
                                key="list-loadmore-view"
                                className={styles.viewAnswerButton}
                                onClick={() => handleViewAnswer(item.books)}
                            >
                                View Answer
                            </Button>
                        ]
                    }
                >
                    <Skeleton avatar title={false} loading={!historyBooksLoading} active>
                        <List.Item.Meta
                            className={styles.historyBookListItemMeta}
                            avatar={<Avatar className={styles.historyBookListItemIcon} src={historyIcon}/>}
                            title={`${index + 1} Question`}
                            description={item.question}
                        />
                    </Skeleton>
                </List.Item>
            )}
        />
    );
};

export default RequestHistory;
