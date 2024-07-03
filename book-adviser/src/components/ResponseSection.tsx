import React from "react";
import PromptForm from "./PromptForm.tsx";
import {Button, Modal, Empty} from 'antd';
import styles from "../pages/styles.module.css";
import {useBook} from "../context/BookContext.tsx";
import ContentLoading from "./ContentLoading.tsx";
import BookTable from "./BookTable.tsx";

const ResponseSection: React.FC = () => {
    const {books, booksLoading, isFormModalOpen, setIsFormModalOpen} = useBook()

    const showModal = (): void => {
        setIsFormModalOpen(true);
    };

    const handleCancel = (): void => {
        setIsFormModalOpen(false);
    };

    console.log(booksLoading)

    return (
        <div className={styles.contentContainer}>
            <div className={styles.responseContent}>
                {
                    !booksLoading ?
                        Array.isArray(books) && books.length != 0 ? (
                            <BookTable/>
                        ) : (
                            <Empty
                                description={""}
                            />
                        )
                        :
                        <ContentLoading bookLoading/>
                }
            </div>
            <div className={styles.promptButtonContainer}>
                <Button
                    className={styles.promptButton}
                    type="primary"
                    size={"large"}
                    onClick={showModal}
                >
                    Enter Prompt
                </Button>
            </div>
            <Modal
                title="Prompt Form"
                open={isFormModalOpen}
                onCancel={handleCancel}
                centered={true}
                footer={false}
            >
                <PromptForm/>
            </Modal>
        </div>
    )
}

export default ResponseSection