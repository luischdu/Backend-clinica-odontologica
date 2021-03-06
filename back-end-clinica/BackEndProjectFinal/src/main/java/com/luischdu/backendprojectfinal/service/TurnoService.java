package com.luischdu.backendprojectfinal.service;

import com.luischdu.backendprojectfinal.models.Turno;
import com.luischdu.backendprojectfinal.repository.impl.TurnoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TurnoService {
    private final TurnoRepository turnoRepository;

    @Autowired
    public TurnoService(TurnoRepository turnoRepository){
        this.turnoRepository =turnoRepository;
    }

    public Turno registrarTurno(Turno turno){return turnoRepository.save(turno);}
    public List<Turno> listar(){return turnoRepository.findAll();}
    public void eliminar(Integer id){ turnoRepository.deleteById(Long.valueOf(id));}
    public Turno actualizar(Turno turno){return turnoRepository.save(turno);}
    public Optional<Turno> buscar(Integer id){return turnoRepository.findById(Long.valueOf(id));}


}
