# API Documentation

## Endpoint: `/users/register`

### Description
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns an authentication token along with the user details.

### HTTP Method
`POST`

### Request Body
The following fields are required in the request body:

| Field     | Type   | Required | Description                                   |
|-----------|--------|----------|-----------------------------------------------|
| `username`| String | Yes      | The username of the user. Must be unique and between 3 to 20 characters. |
| `email`   | String | Yes      | The email address of the user. Must be unique and valid. |
| `password`| String | Yes      | The password of the user. Must be at least 6 characters long. |

Example request body:
```json
{
  "username": "john_doe",
  "email": "john.doe@example.com",
  "password": "securepassword123"
}