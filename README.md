<p align='left'>
    <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fimgur.com%2Fgallery%2FdVswCaP&psig=AOvVaw3oGRNm49Cv4i55N5SI0svj&ust=1642815370122000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjUk6jawfUCFQAAAAAdAAAAABAD' </img>
</p>

# Rick And Morty Proyect

## Description:
This proyect was created like a technical test for a company. 

## Starting

 1. Fork the repository to have a copy of it in your accounts
 2. Clone the repository on your computers to start working
 3. In `backend-rick-and-morty` folder create a `.env` file like
 
 ```
NODE_ENV= ==>> Here you should write `production` if you want to do deployment of backend 

DB_PG_DIALECT=postgres
DB_PG_USER=
DB_PG_PASSWORD=
DB_PG_HOST=localhost
DB_PG_DATABASE=rickymorty
```

 4. In `backend-rick-and-morty` folder and `frontend-rick-and-morty` folder open a terminal, and white follow command:
 `npm install`
 `npm start`
 
 ### API https://rickandmortyapi.com/
 
 ## Technologies:
 
 ##__DataBase__: 
 - [ ] PostgreSQL
 I created three models in PostgreSQL (Characters - Episodes - Locations). 
  - __Characters:__ name, image, gender, species and status
  - __Episodes:__ name and episode
  - __Locations:__ name, type and dimension
 
 ##__BackEnd__:  
- [ ] Express
- [ ] Sequelize
  - __Characters:__ 
    - __GET /characters__: A list with all the characters
    - __GET /characters?name="..."__: Look a character by his name
    - __GET /characters/{idCharacters}__: You can access to more information about the character
    - __POST /characters/{idCharacters}__: You can create a new character
    - __DELETE /characters/{idCharacters}__: You can delete a character

  - __Episodes:__ name and episode
    - __GET /episodes__: A list with all the episodes
    - __POST /episodes/{idEpisodes}__: You can create a new episode
    - __DELETE /episodes/{idEpisodes}__: You can delete a episode
    
  - __Locations:__ name, type and dimension
    - __GET /dimensions__: A list with all the dimension
    - __POST /dimensions/{idDimension}__: You can create a new dimension
    - __DELETE /dimensions/{idDimension}__: You can delete a dimension
 
 ##__FrontEnd__: 
- [ ] React
- [ ] Redux
- [ ] Axios
- [ ] Sass

