package com.luischdu.backendprojectfinal.service;


import com.luischdu.backendprojectfinal.models.Paciente;
import com.luischdu.backendprojectfinal.repository.impl.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PacienteService {
    private final PacienteRepository pacienteRepository;

    @Autowired
    public PacienteService(PacienteRepository pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
    }

    public Paciente guardar(Paciente paciente){ return pacienteRepository.save(paciente);}

    public Optional<Paciente> buscar(Integer id){ return pacienteRepository.findById(Long.valueOf(id));}

    public List<Paciente> buscarTodos(){ return pacienteRepository.findAll();}

    public void eliminar(Integer id){pacienteRepository.deleteById(Long.valueOf(id));}

    public Paciente actualizar(Paciente paciente){return  pacienteRepository.save(paciente);}


}
