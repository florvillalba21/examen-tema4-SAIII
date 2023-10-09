# EXAMEN DE SEMINARIO DE ACTUALIZACIÓN III 
## Villalba, Florencia
### Iniciar docker swarm
docker swarm init

### Levantar la imagen en base al dockerfile de nuestra aplicacion
docker build -t dockerfile-examen-app -f Dockerfile .

### levantar la pila de servicios
docker stack deploy -c docker-compose.yml servicio-examen