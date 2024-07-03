package com.patika.book_advicer_api.service.concretes;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ai.client.AiClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.patika.book_advicer_api.model.dto.request.BookDbSaveRequest;
import com.patika.book_advicer_api.model.dto.request.BookRequest;
import com.patika.book_advicer_api.model.dto.response.BookResponse;
import com.patika.book_advicer_api.repository.BookRepository;
import com.patika.book_advicer_api.service.abstracts.BookService;

import java.util.List;

@Slf4j
@Service
public class BookServiceImpl implements BookService {
    private final BookRepository bookRepository;
    private final ObjectMapper objectMapper;
    private final AiClient aiClient;

    @Autowired
    public BookServiceImpl(BookRepository bookRepository, ObjectMapper objectMapper, AiClient aiClient) {
        this.bookRepository = bookRepository;
        this.objectMapper = objectMapper;
        this.aiClient = aiClient;
    }

    @Override
    public BookResponse findBooks(BookRequest request) {
        String builder = request.getQuestion() +
                " Output these suggestions as json." +
                " The json content of each book must contain title, author, genre, category and description.";

        int retryCount = 0;
        int maxRetries = 5;
        BookResponse response = null;

        while (retryCount < maxRetries) {
            String openAiResponse = aiClient.generate(builder);
            try {
                JsonNode root = objectMapper.readTree(openAiResponse);

                if (root.isArray() && root.size() == 0) {
                    log.warn("Empty array response received, retrying... ({}/{})", retryCount + 1, maxRetries);
                    retryCount++;
                    continue;
                }

                if (root.isArray()) {
                    response = objectMapper.readValue(openAiResponse, new TypeReference<BookResponse>() {});
                } else {
                    response = objectMapper.treeToValue(root, BookResponse.class);
                }

                log.info("books response: {}", response);

                if (response != null && response.getBooks() != null && !response.getBooks().isEmpty()) {
                    log.info("Successfully, Books response: {}", response.getBooks());
                    break;
                }

            } catch (JsonProcessingException error) {
                log.error("Failed to parse JSON response", error);
                break;
            }
            retryCount++;
        }

        if (response != null && response.getBooks() != null && !response.getBooks().isEmpty()) {
            BookDbSaveRequest bookDbSaveRequest = prepareBookDbSaveRequest(request, response);
            bookRepository.insert(bookDbSaveRequest);
        } else {
            log.error("Failed to retrieve a valid book response after {} retries", maxRetries);
        }

        return response;
    }
    @Override
    public List<BookDbSaveRequest> findAll() {
        return bookRepository.findAll();
    }

    private BookDbSaveRequest prepareBookDbSaveRequest(BookRequest request, BookResponse response) {
        return BookDbSaveRequest.builder()
                .question(request.getQuestion())
                .books(response.getBooks())
                .build();
    }
}
