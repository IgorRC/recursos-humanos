package gnius.recursoshumanos.repositorio;

import gnius.recursoshumanos.modelo.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmpleadoRepositorio extends JpaRepository<Empleado,Integer> {

}
