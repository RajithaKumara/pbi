# Getting Started

## Prerequisites

Before you begin working with the OrangeHRM REST APIs, ensure you have the following prerequisites in place:

- **OAuth 2.0 client credentials:** To authenticate API requests, you will need access token. Obtain OAuth 2.0 client credentials from your OrangeHRM system administrator.
- **HTTP Client (Optional):** For making API requests, you will need an HTTP client such as cURL, Postman.

## Authentication

The OrangeHRM REST API supports secure authentication mechanisms to safeguard access to the data. This section outlines the supported authentication methods, how to obtain access tokens.

### Supported Authentication Methods

OrangeHRM REST API supports the OAuth 2.0 protocol, which is widely adopted for secure API authentication. Specifically, we use the OAuth 2.0 `client_credentials` grant type for the communication.

### Obtaining an Access Token

To obtain an access token for API access, follow these steps:

1. Contact your OrangeHRM system administrator and obtain a client ID and client secret.
2. Use the client credentials (client ID and client secret) to make a `POST` request to the `/oauth/issueToken` endpoint, passing the grant type (client_credentials).

#### Request Body:

| Field           | Type              | Description                                               |
| --------------- | ----------------- | --------------------------------------------------------- |
| `client_id`     | String (required) | Client ID of the OAuth client                             |
| `client_secret` | String (required) | Client secret which is given for the particular client ID |
| `grant_type`    | String (required) | This value should be 'client_credentials' every time      |

#### Example Request:

```bash
curl --request POST \
--url "https://example.orangehrm.com/oauth/issueToken" \
--header 'Content-Type: application/json' \
--data-raw '{
	"client_id" : "powerbi_client",
	"client_secret" : "CLIENT-SECRET",
	"grant_type" : "client_credentials"
}'
```

3. Upon successful authentication, the API will issue an access token that you can use in subsequent API requests.

#### Example Response:

```json
{
  "access_token": "ACCESS-TOKEN",
  "expires_in": 3600,
  "token_type": "Bearer",
  "scope": "pbi"
}
```

::: warning Note
Keep your client credentials secure, as they provide access to OrangeHRM APIs. Use secure storage methods to protect them.
:::

### Making Authenticated API Requests

To make authenticated API requests to the OrangeHRM REST API, you need to include the `Authorization` header in your HTTP requests. The `Authorization` header is used to carry the access token required for authentication.

- Obtain access token from `/oauth/issueToken` endpoint as metioned above.
- Include access token in `Authorization` header
  - Once you have obtained the access token, add it to the `Authorization` header of your HTTP requests.
  - The header should be in the format, `Authorization: Bearer ACCESS-TOKEN`
  - Replace `ACCESS-TOKEN` with your actual access token value.

#### Example API Request with Authorization Header:

```http
GET /api/pbi/tables HTTP/1.1
Host: example.orangehrm.com
Authorization: Bearer df9864a50cb4f322aa564bbcaa61cf9ba175e00d
```

```bash
curl --request GET \
--url "https://example.orangehrm.com/api/pbi/tables" \
--header "Authorization: Bearer df9864a50cb4f322aa564bbcaa61cf9ba175e00d" \
--header 'Content-Type: application/json'
```

#### Refreshing Access Token

Remember that access tokens have a limited validity period (Default: 1 hour). If your access token expires, you will need to request a new one following the `Obtaining an Access Token` section.
