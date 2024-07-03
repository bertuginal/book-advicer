package com.patika.book_advicer_api.utils.results;

import java.util.Date;

public class SuccessResult extends Result {
    public SuccessResult() {
        super("200", "Başarılı", new Date());
    }

    public SuccessResult(String message) {
        super("200", message, new Date());
    }
}
