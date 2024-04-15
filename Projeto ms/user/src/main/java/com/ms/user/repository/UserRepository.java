package com.ms.user.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.ms.user.models.UserModel;
import java.util.UUID;
public interface UserRepository extends JpaRepository<UserModel, UUID> {
    
}
