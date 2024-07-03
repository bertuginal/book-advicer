import React from 'react';
import {
    Button,
    Form,
    Input, InputNumber,
    Select
} from 'antd';
import {BookData, useBook} from "../context/BookContext.tsx";
import styles from "../pages/styles.module.css";
import axios from "axios";

const {Option} = Select;

const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 8}
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 24}
    }
};

interface FormData {
    title: string,
    author: string,
    category: string,
    language: string,
    count: number
}

const PromptForm: React.FC = () => {
    const {
        setBooks,
        setBooksLoading,
        setIsFormModalOpen
    } = useBook()
    const [form] = Form.useForm();

    const findBooks = (bookRequest: string): void => {
        setBooksLoading(true)

        axios.post("http://localhost:8080/books",
            {
                question: bookRequest
            }
        )
            .then(async (response) => {
                console.log(response)
                const data: BookData[] = await response.data.data.books
                setBooks(data)
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => {
                setBooksLoading(false)
            })
    }

    const onFinish = (values: FormData) => {
        const bookRequest: string = `
            Recommend me ${values.count} books 
            similar to ${values.author}'s book 
            titled ${values.title} in 
            the ${values.category} category. 
            Answer in ${values.language}.`

        console.log(bookRequest)
        findBooks(bookRequest)
        setIsFormModalOpen(false)
        form.resetFields()
    };

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="PromptForm"
            onFinish={onFinish}
            style={{maxWidth: 600}}
            layout={"vertical"}
            scrollToFirstError
        >
            <Form.Item
                name="title"
                label="Title"
                rules={[
                    {
                        required: true,
                        message: 'Please input book title !',
                        whitespace: true
                    }
                ]}
                hasFeedback
            >
                <Input placeholder={"Enter book title"}/>
            </Form.Item>

            <Form.Item
                name="author"
                label="Author"
                rules={[
                    {
                        required: true,
                        message: 'Please input book author !',
                        whitespace: true
                    }
                ]}
                hasFeedback
            >
                <Input placeholder={"Enter book author"}/>
            </Form.Item>

            <Form.Item
                name="category"
                label="Category"
                rules={[
                    {
                        required: true,
                        message: 'Please select book category !'
                    }
                ]}
                hasFeedback
            >
                <Select placeholder="Select book category">
                    <Option value="history">History</Option>
                    <Option value="biography">Biography</Option>
                    <Option value="philosophy">Philosophy</Option>
                    <Option value="psychology">Psychology</Option>
                    <Option value="detective">Detective</Option>
                    <Option value="fantastic">Fantastic</Option>
                    <Option value="economy">Economy</Option>
                    <Option value="fiction">Fiction</Option>
                </Select>
            </Form.Item>

            <Form.Item
                name="language"
                label="Language"
                rules={[
                    {
                        required: true,
                        message: 'Please select book language !'
                    }
                ]}
                hasFeedback
            >
                <Select placeholder="Select book language">
                    <Option value="turkish">Turkish</Option>
                    <Option value="english">English</Option>
                    <Option value="german">German</Option>
                    <Option value="french">French</Option>
                    <Option value="russian">Russian</Option>
                </Select>
            </Form.Item>

            <Form.Item
                name="count"
                label="Count"
                rules={[
                    {
                        required: true,
                        message: 'Please input book count!'
                    },
                    {
                        type: 'number',
                        min: 1,
                        message: 'Please input a valid book count (must be at least 1)'
                    },
                ]}
                hasFeedback
            >
                <InputNumber style={{ width: '100%' }} placeholder={"Enter book count"} />
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className={styles.promptFormSubmitButton}
                >
                    Search
                </Button>
            </Form.Item>
        </Form>
    );
};

export default PromptForm;