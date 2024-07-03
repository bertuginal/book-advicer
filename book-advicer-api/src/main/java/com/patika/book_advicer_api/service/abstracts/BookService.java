package com.patika.book_advicer_api.service.abstracts;

import com.patika.book_advicer_api.model.dto.request.BookDbSaveRequest;
import com.patika.book_advicer_api.model.dto.request.BookRequest;
import com.patika.book_advicer_api.model.dto.response.BookResponse;

import java.util.List;

public interface BookService {
    BookResponse findBooks(BookRequest bookRequest);
    List<BookDbSaveRequest> findAll();
}
