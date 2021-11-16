package life.majiang.community.enums;

public enum NotificationStatuEnum {
    UNREAD(0),READ(1)
    ;
    private int status;

    public int getStatus() {
        return status;
    }

    NotificationStatuEnum(int status) {
        this.status = status;
    }
}
