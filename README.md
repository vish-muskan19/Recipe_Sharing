

# This is a Recipe Sharing project.
I developed a web application by using Spring Boot + Angular.

## Tech Stack

+ Spring Boot
+ MySQl Database
+ Bootstrap4 
+ Angular Material
+ Tailwind css

## Backend Design
#### Entities
Entities are inspired by the real world entities that can use the applications
1. User having attributes:
- UserID (Primary Key), FullName, Email, Password

2. Recipe having attributes:
RecipeID (Primary Key), Title, Image, Description, Vegatarian, createAt

### Relationships Between Entities and ER diagram

User has an one-to-many relationship with Recipe. This means that one user can have many recipes, but each recipe belongs to one user. The relationship is indicated by the line connecting the "User" entity to the "Recipe" entity, and the crow's foot notation on the "Recipe" side of the line.


![App Screenshot](https://github.com/vish-muskan19/Recipe_Sharing/blob/main/Recipe_Backend/screenshot/ER%20diagram.png?raw=true)


## Port

```bash
 http://localhost:4200
```

## Screenshot

#### Register
![App Screenshot](https://github.com/vish-muskan19/Recipe_Sharing/blob/main/Recipe_Backend/screenshot/SignUp.png?raw=true)

#### Login
![App Screenshot](https://github.com/vish-muskan19/Recipe_Sharing/blob/main/Recipe_Backend/screenshot/Login.png?raw=true)

#### Home
![App Screenshot](https://github.com/vish-muskan19/Recipe_Sharing/blob/main/Recipe_Backend/screenshot/Home.png?raw=true)

#### Add
![App Screenshot](https://github.com/vish-muskan19/Recipe_Sharing/blob/main/Recipe_Backend/screenshot/Add.png?raw=true)

#### Update
![App Screenshot](https://github.com/vish-muskan19/Recipe_Sharing/blob/main/Recipe_Backend/screenshot/Update.png?raw=true)

