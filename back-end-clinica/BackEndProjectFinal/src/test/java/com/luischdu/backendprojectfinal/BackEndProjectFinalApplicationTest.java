package com.luischdu.backendprojectfinal;

import com.luischdu.backendprojectfinal.models.Domicilio;
import com.luischdu.backendprojectfinal.models.Odontologo;
import com.luischdu.backendprojectfinal.models.Paciente;
import com.luischdu.backendprojectfinal.service.OdontologoService;
import com.luischdu.backendprojectfinal.service.PacienteService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
public class BackEndProjectFinalApplicationTest {

    @Autowired
    OdontologoService odontologoService;

    @Autowired
    PacienteService pacienteService;

    @Test
    void registrarOdontologo() {
        Odontologo odontologo   = new Odontologo("Camilo","Perez",321);
        odontologoService.registrarOdontologo(odontologo);

        List<Odontologo> odontologos = odontologoService.buscarTodos();
        boolean pruebaRegistroOdontologo = odontologos.isEmpty();

        assertFalse(pruebaRegistroOdontologo);
    }

    @Test
    void registrarPaciente() {
        Paciente paciente   = new Paciente("Carlos","Martinez","101023",null, null);
        pacienteService.guardar(paciente);

        List<Paciente> pacientes = pacienteService.buscarTodos();
        boolean pruebaRegistroPaciente = pacientes.isEmpty();

        assertFalse(pruebaRegistroPaciente);
    }

}
