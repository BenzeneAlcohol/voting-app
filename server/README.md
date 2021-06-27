# Installation
1. Change directory to server using cd server, then run the command: npm install.
2. Every package will be installed, then make sure to run powershell(if you are on windows) or terminal on linux, type "mongod" to run the MongoDB server locally.
3. Next change the name of the database in the config->mongoose.js file if you want.
4. "nodemon index.js" to run the server. 
5. It should be running on port 7000.

# Folder setup
* config: Holds the mongoose.js file where the connection between the server and mongoDB is establihsed.
* controllers: Has all the functions that will be fired on accessing a specific route.
* middlware: Has the authentication middleware that will authenticate the user and allow access to private routes as well as store which user is accessing the route.
* models: Has the Mongoose Schema of the User and the Poll, which has all the required functions and database fields.
* routes: Has the express router whcih redirects specific routes to specific controllers which will be fired on accessing those routes.

# API docs
## Poll APIs

**1. Get all polls**
* **URL**
    `/api/polls`

* **METHOD**
    `GET`


* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{[ displaying all polls]}`

* **Error Response**
    * **Code:** `500` <br />
      **Message:** `{success: false,
	  message: error.message}` <br />

* **Required Filed**
    * **Auth Required : False**

<br>
<br>

**2. Get specific poll by ID**
* **URL**
    `/api/polls/:id`

* **METHOD**
    `GET`
* **URL params**
    `id`
* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{Poll that was found by the ID}`

* **Error Responses**
    * **Code:** `401` <br />
      **Message:** `{ success: false,
                message: "Object ID invalid"}` <br />
	 * **Code:** `401` <br />
      **Message:** `{success: false,
            message: err.message"}` <br />
	 * **Code:** `401` <br />
      **Message:** `{                success: false,
                message: "No Poll exists""}` <br />

* **Required Filed**
    * **Auth Required : False**
<br>
<br>

**3. Get details of the polls created by the signed-in user**
* **URL**
    `/api/polls/dashboard`

* **METHOD**
    `GET`
`**NOTE**: in the headers you have to authorize token and you can get token by signin API`

* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{[Polls created by the user]}` <br />

* **Error Response**
    * **Code:** `401` <br />
      **Message:** `            success: false,
            message: err.message` <br />

* **Required Filed**
    * **Auth Required : True**

<br>
<br>

**4.  Vote to a specific poll**

* **URL**
    `/api/polls/vote/:id`

* **METHOD**
    `GET`
	
	`**NOTE**: in the headers you have to authorize token and you can get token by signin API`

* **URL params**
    `particular poll id`

* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{poll with the ID, with updated vote values}`

* **Error Response** 
    * **Code:** `400` <br />
      **Message:** `Object ID invalid` <br />
    * **Code:** `400` <br />
      **Message:** `Poll not found` <br />
    * **Code:** `400` <br />
      **Message:** `"No form body` <br />
    
    * **Code:** `400` <br />
      **Message:** `You have already voted once` <br />

* **Required Filed**
    * **Auth Required : True**
 <br>
 <br>
 
**5. Create polls**
* **URL**
    `/api/polls`

* **METHOD**
    `POST`

`**NOTE**: in the headers you have to authorize token and you can get token by signin API `

* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{Full Poll Data}`

* **Error Response**
    * **Code:** `400` <br />
      **Message:** `            message: error.message,
            success: false` <br />

* **Required Filed**
     * **Auth Required : True**