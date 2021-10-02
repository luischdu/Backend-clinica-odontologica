package com.luischdu.backendprojectfinal.repository.impl;

import com.luischdu.backendprojectfinal.models.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthenticationRequestRepository extends JpaRepository<Usuarios,Long> {

    @Query("from Usuarios u where u.username = :user")
    Usuarios getCredentials(@Param("user") String user);

}
