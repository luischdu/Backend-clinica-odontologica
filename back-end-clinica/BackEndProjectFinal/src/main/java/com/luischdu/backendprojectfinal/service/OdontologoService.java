package com.luischdu.backendprojectfinal.service;

import com.luischdu.backendprojectfinal.models.Odontologo;
import com.luischdu.backendprojectfinal.repository.impl.OdontologoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OdontologoService {
    private final OdontologoRepository odontologoRepository;

    public OdontologoService(OdontologoRepository odontologoRepository) {
        this.odontologoRepository = odontologoRepository;
    }

    public Odontologo registrarOdontologo(Odontologo odontologo){
        return odontologoRepository.save(odontologo);
    }
    public void eliminar(Integer id ){odontologoRepository.deleteById(Long.valueOf(id));}

    public Optional<Odontologo> buscar(Integer id){ return odontologoRepository.findById(Long.valueOf(id));}

    public List<Odontologo> buscarTodos() {return odontologoRepository.findAll();}

    public Odontologo actualizar(Odontologo odontologo){return odontologoRepository.save(odontologo);}

}
