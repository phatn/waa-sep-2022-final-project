package edu.miu.waa.propertymanagementservice.entity;


import javax.persistence.PrePersist;
import javax.persistence.PreRemove;
import javax.persistence.PreUpdate;
import java.time.LocalDateTime;

public class AuditListener {

    @PrePersist
    void preCreate(Object entity) {
        if(entity instanceof Auditable auditable) {
            auditable.setCreatedDate(LocalDateTime.now());
            auditable.setCreatedBy("Unknown");
        }

    }

    @PreUpdate
    void preUpdate(Object entity) {
        if(entity instanceof Auditable auditable) {
            auditable.setUpdatedDate(LocalDateTime.now());
            auditable.setUpdatedBy("Unknown");
        }
    }

    @PreRemove
    void preRemove(Object entity) {
        if(entity instanceof Auditable auditable) {
            auditable.setDeletedBy("Unknown");
            auditable.setDeletedDate(LocalDateTime.now());
        }
    }
}
