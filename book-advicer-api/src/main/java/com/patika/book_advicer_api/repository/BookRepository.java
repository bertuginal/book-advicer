package com.patika.book_advicer_api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.patika.book_advicer_api.model.dto.request.BookDbSaveRequest;

@Repository
public interface BookRepository extends MongoRepository<BookDbSaveRequest, String> {
}
