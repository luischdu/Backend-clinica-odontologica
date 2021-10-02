package com.luischdu.backendprojectfinal.repository.impl;

import com.luischdu.backendprojectfinal.models.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PacienteRepository extends JpaRepository<Paciente,Long> {
}
