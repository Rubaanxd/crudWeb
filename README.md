# Sistema de Altas, Bajas y Consultas version WEB

Crud version Web implementando FrontEnd Basico (HTML,CSS y JS)

![](https://img.shields.io/github/stars/rubaanxd/crudweb.svg) ![](https://img.shields.io/github/forks/rubaanxd/crudweb.svg) ![](https://img.shields.io/github/tag/rubaanxd/crudweb.svg) ![](https://img.shields.io/github/release/rubaanxd/crudweb.svg) ![](https://img.shields.io/github/issues/rubaanxd/crudweb.svg) ![](https://img.shields.io/bower/v/crudweb.svg)

### Vision
El Plan es hacer en version web del programa en java que ya tengo en java [CRUD Java](https://github.com/Rubaanxd/CRUD), un sistema que nos permita hacer altas, bajas y consultas de tickets, documentos y equipo de Impresion.

### Funciones
- Login y registro de Usuarios.
- El Menu Principal cambiara dependiendo del tipo de usuario logeado.
- En ALTAS debera que tener que poder hacer validaciones con el NS del equipo, que el ticket sea valido y se pueda subir un documento     PDF   via sftp u otro metodo.
- En BAJAS (En [CRUD Java](https://github.com/Rubaanxd/CRUD) no lo implemente) se tendra que poder borrar el registro en el servidor de     MySQL asi como el documento via sftp u otro metodo.
- En CONSULTAS tendra la opcion de buscar el ticket o en dado caso el NS del Equipo.
  - Por TICKET se desplegara informacion del Equipo y Ticket en cuestion.
  - Por NS de Equipo se desplegara informacion del Equipo y en una Tabla se enlistaran los detalles principales de los tickets asignados    a ese equipo junto con un boton para poder visualizar el PDF asignado al ticket seleccionado.

### Lista por Hacer

- [ ] Inicio
  - [ ] Login
  - [ ] Registro
- [ ] Pagina Principal
  - [ ] Altas
      - [ ] Ticket
      - [ ] Toner
  - [ ] Bajas
      - [ ] Ticket
      - [ ] Toner
  - [ ] Consultas
      - [ ] Ticket
      - [ ] Equipo
  
