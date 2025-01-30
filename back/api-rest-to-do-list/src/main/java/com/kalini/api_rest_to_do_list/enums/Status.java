package com.kalini.api_rest_to_do_list.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum Status {
    NAO_INICIADO("não iniciado"),
    EM_ANDAMENTO("em andamento"),
    CONCLUIDO("concluído");

    private final String descricao;

    Status(String descricao) {
        this.descricao = descricao;
    }

    @JsonValue
    public String getDescricao() {
        return descricao;
    }

    @JsonCreator
    public static Status fromString(String text) {
        for (Status status : Status.values()) {
            if (status.descricao.equalsIgnoreCase(text) || status.name().equalsIgnoreCase(text)) {
                return status;
            }
        }
        throw new IllegalArgumentException("Status inválido: " + text);
    }
}