package com.luischdu.backendprojectfinal.service;

import com.luischdu.backendprojectfinal.models.Domicilio;
import com.luischdu.backendprojectfinal.repository.impl.DomicilioRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DomicilioService {
    private final DomicilioRepository domicilioRepository;

    public DomicilioService(DomicilioRepository domicilioRepository) {
        this.domicilioRepository = domicilioRepository;
    }

    public Domicilio guardar(Domicilio domicilio){
        return domicilioRepository.save(domicilio);
    }

    public Optional<Domicilio> buscar(Integer id){ return Optional.of(domicilioRepository.getById(Long.valueOf(id)));}

    public List<Domicilio> buscarTodos(){return domicilioRepository.findAll();}

    public void eleminar(Integer id){ domicilioRepository.deleteById(Long.valueOf(id));}

}


