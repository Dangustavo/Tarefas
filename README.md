

# Tarefas

## A  API

### Pré-requisitos

Você deve instalar os seguintes pacotes antes de prosseguir:

-   `yarn`

### Executando o servidor da API

Na raiz deste projeto, rode:

cd ./api
yarn install
yarn start # o servidor irá escutar a porta 3333 por padrão

### Alterando a porta padrão
Caso a porta 3333 esteja sendo utilizada em outro local, altere a porta no arquivo:
- `api>src>index`
- `const PORT =  3333` # altere para a porta disponível;*

## O APP

### Pré-requisitos

Você deve instalar os seguintes pacotes antes de prosseguir:

-   `yarn`
-  `expo`

### Executando o APP

Na raiz deste projeto, rode:

cd ./api
yarn install
yarn start # Por padrão, o endereço de conexão com API é 'http://192.168.0.106:3333';

### Alterando o IP e porta padrão
Caso o ip da máquina onde está rodando a API seja diferente e/ou a porta 3333 esteja sendo utilizada em outro local, altere a porta no arquivo:
- `app-tarefas>src>services>api`
- `const PORT =  3333` # altere para a mesma porta definida na API;*
- `const IP=  192.168.0.106` # altere para o mesmo IP da máquina que está rodando a API;*

### Endpoints

Este repositório contém a API que será utilizada como backend na aplicação. Ela possui os seguintes endpoints:

1.  **POST /users**
    
   -   **Headers:**
        -   Content-Type:  `application/json`
    -   **Body:**
  
        {<br/>
            "name":String, <br/>
            "email": String,<br/>
            "password": String<br/>
        }
        
    -   **Response:**
        
        -   Quando as credenciais são válidas:
            
            -   Status Code:  **`200`**
            - {<br/>
                  "id": String<br/>
                }
                
        -   Quando o email inserido já foi cadastrado:
            
            -   Status Code:  **`400`**
            -  
                {<br/>
                     "error": String<br/>
                }
                

2. **POST/session**

-   **Headers:**
    -   Content-Type:  `application/json`
    
   - **Body:**
    
    {
    "email": String,
    "password": String
    }
    
-   **Response:**
    
    -   Quando o usuário e senha são válidos:
        
        -   Status Code:  **`200`**
        - 
            {<br/>
               "id": String<br/>
            }
            
    -   Quando o usuário ou senha são inválidos ou inexistente:
        
        -   Status Code:  **`401`**
        - 
   
            {
                "error": String
            }

3. **GET/profile**

-   **Headers:**
    
    -   Authorization:  `{userId}`
   
-   **Response:**
    
    -   Quando o id é valido:
        -   Status Code:  **`200`**
        - 
         
       

         [<br/>
                    {<br/>
        "id": numver,<br/>
        "title": String,<br/>
        "description": String,<br/>
        "place": String,<br/>
        "hour": String,<br/>
        "date": String,<br/>
        "user_id": String<br/>
      },<br/>
//{}
                ]
            
       -   Quando o usuário ou senha são inválidos ou inexistente:
        
           -   Status Code:  **`401`**
           - 
            {<br/>
                "error": String<br/>
            }

 4. **POST/task**

-   **Headers:**
    
    -   Content-Type:  `application/json`
    -   Authorization:  `{userId}`
-   **Response:**
    
    -   Quando o id é válido:
        -   Status Code:  **`200`**
        -  Body:
        {<br/>
         "id": number<br/>
         }
         
    -   Quando o id é inválido ou inexistente:
        -   Status Code:  **`401`**
        - 
        
            {
                "error": String
            }

5. **GET/task**

-   **Headers:**
    
    -   Authorization:  `{id}`
-   **Response:**
    
    -   [<br/>
                {<br/>
    "id": numver,<br/>
    "title": String,<br/>
    "description": String,<br/>
    "place": String,<br/>
    "hour": String,<br/>
    "date": String,<br/>
    "user_id": String<br/>
  },<br/>
//{}
            ]
    -   Quando o id é inválido ou inexistente:
        -   Status Code:  **`401`**
        - 
     
            {
                "error": String<br/>
            }

6. **PUT/task/{id}**

-   **Headers:**
    
    -   Content-Type:  `application/json`
    -   Authorization:  `{userId}`
    - Body
    [<br/>
                {<br/>
    "id": numver,<br/>
    "title": String,<br/>
    "description": String,<br/>
    "place": String,<br/>
    "hour": String,<br/>
    "date": String,<br/>
    "user_id": String<br/>
  },<br/>
            ]
            
-   **Response:**
    
    -   Quando o id do usuário é válido:
        -   Status Code:  **`204`**
        
    -   Quando o id do usuário é inválido ou inexistente:
        -   Status Code:  **`401`**
        -  
            {<br/>
                "error":  String<br/>
            }

7. **DELETE/task/{id}**

-   **Headers:**
   
    -   Authorization:  `{userId}`
    
  -   **Response:**
    
        -   Quando o id é válido:
            -   Status Code:  **`204`**
        
        -   Quando o id é inválido ou inexistente:
            -   Status Code:  **`401`**
            - 
        
                {
                "error":  String
                }
