package com.luischdu.backendprojectfinal.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table
@Getter @Setter
public class Turno {
    @Id
    @SequenceGenerator(name = "turno_sequence", sequenceName = "turno_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "turno_sequence")
    private Integer id;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "paciente_id")
    @JsonIgnore
    private Paciente paciente;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "odontologo_id")
    @JsonIgnore
    private Odontologo odontologo;
    private Date fechaTurno;

    public Turno() {
    }

    public Turno(Paciente paciente, Odontologo odontologo, Date fechaTurno) {
        this.paciente = paciente;
        this.odontologo = odontologo;
        this.fechaTurno = fechaTurno;
    }

    @Override
    public String toString() {
        return "Turno{" +
                "paciente=" + paciente +
                ", odontologo=" + odontologo +
                ", fechaTurno=" + fechaTurno +
                '}';
    }
}
