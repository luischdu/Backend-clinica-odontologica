package com.luischdu.backendprojectfinal.controller;


import com.luischdu.backendprojectfinal.models.Usuarios;
import com.luischdu.backendprojectfinal.service.AuthenticationRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationRequestService authenticationRequestService;

    @PostMapping()
    public Usuarios authenticationUser(@RequestBody Usuarios usuario){
        Usuarios response = null;
        if(usuario.getUsername() != null){
            response = authenticationRequestService.buscarPorUserName(usuario.getUsername());
        }

        return response;
    }


}
