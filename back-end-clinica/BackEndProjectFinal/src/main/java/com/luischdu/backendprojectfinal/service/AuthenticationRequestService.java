package com.luischdu.backendprojectfinal.service;

import com.luischdu.backendprojectfinal.models.Usuarios;
import com.luischdu.backendprojectfinal.repository.impl.AuthenticationRequestRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class AuthenticationRequestService {

    private final AuthenticationRequestRepository requestRepository;

    public AuthenticationRequestService(AuthenticationRequestRepository authenticationRequestRepository) {
        this.requestRepository = authenticationRequestRepository;
    }

    public Usuarios guardar(Usuarios usuario){
        return requestRepository.save(usuario);
    }

    public Optional<Usuarios> buscar(Long id){ return Optional.of(requestRepository.getById(id));}


    public void eleminar(Long id){ requestRepository.deleteById(id);}

    public Usuarios buscarPorUserName(String user){
        return requestRepository.getCredentials(user);
    }

}
