/**
 * 提交回复
 */
function post() {
    var questionId = $("#question_id").val();
    var content = $("#comment_content").val();
    comment2target(questionId, 1, content);
}

function comment2target(targetId, type, content) {
    if (!content) {
        alert("内容不能为空")
        return;
    }

    $.ajax({
        type: "POST",
        url: "/comment",
        contentType: 'application/json',
        data: JSON.stringify({
            "parentId": targetId,
            "content": content,
            "type": 1
        }),
        success: function (response) {
            if (response.code == 200) {
                window.location.reload();
            } else {
                if (response.code == 2003) {
                    var isAccepted = confirm(response.message);
                    if (isAccepted) {
                        window.open("https://github.com/login/oauth/authorize?client_id=c0cb44251cf59371b35c&redirect_uri=http://localhost:8887/callback&scope=user&state=1");
                        window.localStorage.setItem("closable", true);
                    }
                } else {
                    alert(response.message);
                }
            }
        },
        dataType: "json"
    });
}

function comment(e) {
    var commentId = e.getAttribute('data-id');
    var content = $("#input-" + commentId).val();
    comment2target(commentId, 2, content);
}

/**
 * 展开二级评论
 */
function collapseComments(e) {
    var id = e.getAttribute("data-id");
    var comments = $("#comment-" + id);

    //获取二级评论展开状态
    var collapse = e.getAttribute("data-collapse");
    if (collapse) {
        //折叠二级评论
        comments.removeClass("in");
        e.removeAttribute("data-collapse");
        e.classList.remove("active");
    } else {
        $.getJSON("/comment/" + id, function (data) {
        //     var commentBody = $("comment-body-" + id);
        //     var ltems = [];
        //
        //     $.each(data.data, function (key, val) {
        //         items.push("<li id='" + key + "'>" + val + "</li>");
        //     });
        //
        //     $("<div/>", {
        //         "class": "col-lg-12 col-md-12 col-sm-12 col-xs-12 comments",
        //         html: items.join("")
        //     }).appendTo(commentBody);
        //
        //     //展开二级评论
        //     comments.addClass("in");
        //     //标记评论展开状态
        //     e.setAttribute("data-collapse", "in");
        //     e.classList.add("active");
        });
    }

}