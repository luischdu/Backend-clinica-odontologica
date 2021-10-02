package com.luischdu.backendprojectfinal.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table
@Getter @Setter
public class Domicilio {
    @Id
    @SequenceGenerator(name="domicilio_sequence", sequenceName = "domicilio_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "domicilio_sequence")
    private Integer Id;
    private String calle;
    private String numero;
    private String localidad;
    private String provincia;
    @OneToOne(mappedBy = "domicilio")
    @JsonIgnore
    private Paciente paciente;

    public Domicilio() {
    }

    public Domicilio(String calle, String numero, String localidad, String provincia, Paciente paciente) {
        this.calle = calle;
        this.numero = numero;
        this.localidad = localidad;
        this.provincia = provincia;
        this.paciente = paciente;
    }

    @Override
    public String toString() {
        return "Domicilio{" +
                "Id=" + Id +
                ", calle='" + calle + '\'' +
                ", numero='" + numero + '\'' +
                ", localidad='" + localidad + '\'' +
                ", provincia='" + provincia + '\'' +
                ", paciente=" + paciente +
                '}';
    }
}
