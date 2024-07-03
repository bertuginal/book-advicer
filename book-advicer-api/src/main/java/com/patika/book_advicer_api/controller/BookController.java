package com.patika.book_advicer_api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.patika.book_advicer_api.model.dto.request.BookDbSaveRequest;
import com.patika.book_advicer_api.model.dto.request.BookRequest;
import com.patika.book_advicer_api.model.dto.response.BookResponse;
import com.patika.book_advicer_api.service.abstracts.BookService;
import com.patika.book_advicer_api.utils.ResultMessages;
import com.patika.book_advicer_api.utils.results.DataResult;
import com.patika.book_advicer_api.utils.results.ErrorDataResult;
import com.patika.book_advicer_api.utils.results.SuccessDataResult;

import java.util.List;

@RestController
@RequestMapping("/books")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"})
public class BookController {
    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @PostMapping
    public DataResult<BookResponse> findBooks(@RequestBody BookRequest request) {
        BookResponse result = bookService.findBooks(request);

        if (result != null) {
            return new SuccessDataResult<>(result, ResultMessages.LISTING_SUCCESS_MULTI);
        } else {
            return new ErrorDataResult<>(ResultMessages.NOT_FOUND_MULTI);
        }
    }

    @GetMapping
    public DataResult<List<BookDbSaveRequest>> findAll(){
        List<BookDbSaveRequest> result = bookService.findAll();

        if (result != null) {
            return new SuccessDataResult<>(result, ResultMessages.LISTING_SUCCESS_MULTI);
        } else {
            return new ErrorDataResult<>(ResultMessages.NOT_FOUND_MULTI);
        }
    }
}
