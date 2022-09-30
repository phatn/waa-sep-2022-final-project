package edu.miu.waa.propertymanagementservice.entity;


import edu.miu.waa.propertymanagementservice.domain.KeyCloakUserDetailsAdapter;
import org.springframework.security.core.context.SecurityContextHolder;

import javax.persistence.PrePersist;
import javax.persistence.PreRemove;
import javax.persistence.PreUpdate;
import java.time.LocalDateTime;

public class AuditListener {

    @PrePersist
    void preCreate(Object entity) {
        if(entity instanceof Auditable auditable) {
            auditable.setCreatedDate(LocalDateTime.now());
            KeyCloakUserDetailsAdapter keyCloakUserDetailsAdapter = (KeyCloakUserDetailsAdapter)SecurityContextHolder
                    .getContext().getAuthentication().getPrincipal();
            auditable.setCreatedBy(keyCloakUserDetailsAdapter.getUsername());
        }

    }

    @PreUpdate
    void preUpdate(Object entity) {
        if(entity instanceof Auditable auditable) {
            auditable.setUpdatedDate(LocalDateTime.now());
            KeyCloakUserDetailsAdapter keyCloakUserDetailsAdapter = (KeyCloakUserDetailsAdapter)SecurityContextHolder
                    .getContext().getAuthentication().getPrincipal();
            auditable.setUpdatedBy(keyCloakUserDetailsAdapter.getUsername());
        }
    }

    @PreRemove
    void preRemove(Object entity) {
        if(entity instanceof Auditable auditable) {
            KeyCloakUserDetailsAdapter keyCloakUserDetailsAdapter = (KeyCloakUserDetailsAdapter)SecurityContextHolder
                    .getContext().getAuthentication().getPrincipal();
            auditable.setDeletedBy(keyCloakUserDetailsAdapter.getUsername());
            auditable.setDeletedDate(LocalDateTime.now());
        }
    }
}
