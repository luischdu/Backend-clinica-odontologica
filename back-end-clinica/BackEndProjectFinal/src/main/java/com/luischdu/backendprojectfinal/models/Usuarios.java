package com.luischdu.backendprojectfinal.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "usuarios")
@Getter
@Setter
public class Usuarios {
    @Id
    @SequenceGenerator(name="usuario_sequence", sequenceName = "usuario_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "usuario_sequence")
    private Long id;
    private String username;
    private String password;
    private RolesUsuario rolUsuario;

    @OneToOne(mappedBy = "usuario")
    @JsonIgnore
    private Paciente paciente;

    @OneToOne(mappedBy = "usuario")
    @JsonIgnore
    private Odontologo odontologo;

    public Usuarios() {
    }

    public Usuarios(String username, String password) {
        this.username = username;
        this.password = password;

    }
}
