package com.patika.book_advicer_api.model.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.patika.book_advicer_api.model.Book;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookResponse {
    @Builder.Default
    private List<Book> books = new ArrayList<>();
}
