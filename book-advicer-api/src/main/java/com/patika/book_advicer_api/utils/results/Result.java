package com.patika.book_advicer_api.utils.results;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

public class Result {
    @JsonProperty("serviceStatus")
    private ServiceStatus serviceStatus;

    @JsonProperty("uuid")
    private UUID uuid = UUID.randomUUID();

    public Result(String code, String message, Date time) {
        this.serviceStatus = new ServiceStatus();

        SimpleDateFormat formatter = new SimpleDateFormat("yyyy/MM/dd-HH:mm:ss:MS");

        this.serviceStatus.setCode(code);
        this.serviceStatus.setMessage(message);
        this.serviceStatus.setTime(formatter.format(time));
    }

    public Result(String code, String message, Date time, ServiceStatus serviceStatus) {
        this(code, message, time);
        this.serviceStatus = serviceStatus;
    }
}
