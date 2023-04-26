package com.ownsong.api.board.entity;

import com.ownsong.api.user.entity.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "COMMENT")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "COMMENT_ID", columnDefinition = "INT UNSIGNED")
    private long commentId;

    @Column(name = "COMMENT_CONTENT", length = 50)
    private String commentContent;

    @Column(name = "COMMENT_DATE")
    private LocalDateTime commentDate;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "BOARD_ID")
    private Board board;

    @Builder
    public Comment(long commentId, String commentContent, LocalDateTime commentDate) {
        this.commentId = commentId;
        this.commentContent = commentContent;
        this.commentDate = commentDate;
    }
}
