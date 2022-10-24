Comandi di utonomazione.

make dev = specifica la tipologia di comando, avvia entrambi le applicazioni, backend and frontend, con un unico commando di autonomazione.
make freshdb = command that resets the db
make install = performs installations setup

## API calls examples

###To test httpie
https httpie.io/hello

### register

http POST http://localhost:8001/api/users/register name=Salvatore email=s.dininni@yahoo.com password=12345678 password_confirmation=12345678

### login

http POST http://localhost:8001/api/users/login email=s.dininni@yahoo.com password=12345678

### logout

http POST http://localhost:8001/api/users/logout Authorization:Bearer\ eii...tr3 -> token

### user profile

http GET http://localhost:8001/api/users/view-profile Authorization:Bearer\ eii...tr3 -> token

### create new room

http POST http://localhost:8001/api/users/room game_id=35 game_name=zelda max_seats_available=4 Authorization:Bearer\

### close room

http POST http://localhost:8001/api/users/room/close Authorization:Bearer\

### join room

http POST http://localhost:8001/api/users/room/join room_id=60 Authorization:Bearer\

### streamer info

http GET http://localhost:8001/api/users/room/streamer/7 Authorization:Bearer\

### roosActive

http GET http://localhost:8001/api/users/room/roomsActive

### roosActive

http GET http://localhost:8001/api/users/room/roomsByGame

### count users

http GET http://localhost:8001/api/users/count
s.dininni@yahoo.com
