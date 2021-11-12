package life.majiang.community.dto;

import lombok.Data;

@Data
public class CommentDTO {
    private Long parenId;
    private String content;
    private Integer type;
}
