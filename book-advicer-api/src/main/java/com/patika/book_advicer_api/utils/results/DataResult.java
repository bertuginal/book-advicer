package com.patika.book_advicer_api.utils.results;

import lombok.Getter;

import java.util.Date;

@Getter
public class DataResult<T> extends Result {

    private final T data;

    public DataResult(T data, String code, String message, Date time) {
        super(code, message, time);
        this.data = data;
    }
}
