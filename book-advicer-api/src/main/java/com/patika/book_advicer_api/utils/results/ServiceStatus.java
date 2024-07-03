package com.patika.book_advicer_api.utils.results;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ServiceStatus {
    @JsonProperty("code")
    protected String code;

    @JsonProperty("message")
    protected String message;

    @JsonProperty("time")
    protected String time;
}
