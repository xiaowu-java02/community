package life.majiang.community.model;

public class User {
    private Integer id;
    private String name;
    private String accountId;
    private String token;
    private Long GmtCreate;
    private Long GmtModified;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Long getGmtCreate() {
        return GmtCreate;
    }

    public void setGmtCreate(Long gmtCreate) {
        GmtCreate = gmtCreate;
    }

    public Long getGmtModified() {
        return GmtModified;
    }

    public void setGmtModified(Long gmtModified) {
        GmtModified = gmtModified;
    }
}
