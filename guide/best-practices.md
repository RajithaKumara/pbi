# Usage and Best Practices

In this section, we provide essential guidance on API usage best practices to ensure optimal performance, data security, and a seamless experience while interacting with the OrangeHRM REST APIs.

## Error Handling

Implement proper error handling mechanisms to process error responses and provide meaningful feedback to users or applications.

### Common Error Codes and Messages

Below are some common error codes and their associated messages that you may encounter while interacting with the OrangeHRM REST APIs.

#### 400 Bad Request

```json
{
  "message": "Unsupported Resource Request",
  "errors": {
    "general": "Unsupported Resource Request"
  }
}
```

#### 401 Unauthorized

The provided access token is expired.

```json
{
  "error": "expired_token",
  "error_description": "The access token provided has expired"
}
```

The request is valid, but the authenticated user does not have sufficient permissions to access the resource.

```json
{
  "error": "insufficient_scope",
  "error_description": "The request requires higher privileges than provided by the access token"
}
```

#### 404 Not Found

The requested resource does not exist.

```json
{
  "message": "Not Found",
  "errors": {
    "general": "Not Found"
  }
}
```

#### 422 Unprocessable Entity

The request is malformed or contains invalid parameters.

```json
{
  "message": "Invalid Data",
  "errors": {
    "general": "Unprocessable Entity"
  }
}
```

#### 500 Internal Server Error

An unexpected server error occurred while processing the request.

```json
{
  "message": "Unexpected Error Occurred",
  "errors": {
    "general": "Internal Server Error"
  }
}
```

### Handling Errors and Troubleshooting

- Check Error Codes: Refer to the error code in the response to understand the type of error encountered.
- Review Error Message: The error message provides extra information about the specific issue. Use it for diagnostics and debugging.
- Contact Support: If you encounter persistent issues or need assistance, contact OrangeHRM system administrator or support for further guidance.

## Pagination

When a response from the OrangeHRM REST API would include large datasets, APIs will paginate the results and return a subset of the results rather than the entire dataset. This section demonstrates how to request additional pages of results for paginated responses, how to change the number of results returned on each page, and how to write a script to fetch multiple pages of results.

| Query Parameter | Type              | Description                                                                                |
| --------------- | ----------------- | ------------------------------------------------------------------------------------------ |
| `page[limit]`   | Number (optional) | Specify the maximum number of results to be included in each API response. Default: `null` |
| `page[offset]`  | Number (optional) | Control the starting point of data retrieval in paginated responses. Default: 0            |

::: tip
OrangeHRM REST API pagination behave similarly to the concepts of "LIMIT" and "OFFSET" in SQL queries.
:::

### Understanding Total Record Count

Upon receiving the first API response, check the `meta` object, which typically contains metadata about the API response. Under `meta`, you will find the `total` value, which indicates the total number of records available in the dataset.

```json{5,9}
{
  "data": [
    // ...
  ],
  "meta": {
    "name": "Employee",
    "uniqueName": "v_pbi_employee_v1",
    // ...
    "total": "10000"
  }
}
```

#### Calculating Iteration Count:

To fetch all the records across multiple pages, you can calculate the iteration count required to iterate through the paginated responses. Divide the total record count by the number of results per page (`page[limit]`) and round up to the nearest integer. This calculation determines how many times you need to request additional pages of data to retrieve all available records.

#### Example API Requests:

```http
GET /api/pbi/tables/v_pbi_employee_v1?page[limit]=1000&page[offset]=0       // [This API responce contains first page with 1,000 records]
GET /api/pbi/tables/v_pbi_employee_v1?page[limit]=1000&page[offset]=1000    // [This API responce contains second page with 1,000 records]
GET /api/pbi/tables/v_pbi_employee_v1?page[limit]=1000&page[offset]=2000    // [This API responce contains third page with 1,000 records]
// ...
GET /api/pbi/tables/v_pbi_employee_v1?page[limit]=1000&page[offset]=9000    // [This API responce contains last page with 1,000 records]
```

## Filtering

Filtering is a vital practice in the context of Business Intelligence (BI) integration. It serves to narrow down the dataset and reduce the historical data load, ensuring a more efficient data retrieval process. Filtering allows you to retrieve only the specific data you need for your BI reports and analytics, optimizing performance.

### Types of Filters

#### Date

When using date query parameters such as `filter[emp_creation_date:from]` and `filter[emp_creation_date:to]`, the API only accepts dates in the ISO 8601 format "Y-m-d" (e.g. 2023-06-20).

E.g.
```http
GET /api/pbi/tables/v_pbi_employee_v1?filter[emp_creation_date:from]=2022-01-01&filter[emp_creation_date:to]=2022-12-31
```

#### Multi-value

This type of query parameters allows you to filter data based on multiple values.

E.g. Suppose you want to filter data for employees who are either "Active" or "Terminated." You can achieve this by using the `filter[emp_status]` query parameter with multiple key-value pairs as follows:
```http
GET /api/pbi/tables/v_pbi_employee_v1?filter[emp_status][Active]=Active&filter[emp_status][Terminated]=Terminated
```

Explanation:
- `filter[emp_status][Active]=Active`: This key-value pair filters data for employees with an employment status of `Active`.
- `filter[emp_status][Terminated]=Terminated`: This key-value pair filters data for employees with an employment status of `Terminated`.

## Security and Data Protection

- Implement secure communication using HTTPS to protect data during transmission between your application and the API.
- Safeguard sensitive information, such as client credentials (client ID and client secret). Store them securely in secure storage methods to prevent unauthorized access.
- In the event of a suspected or confirmed security breach where client credentials may have been leaked or compromised:
  - Immediately notify your organization's security team or OrangeHRM system administrator without delay.
  - Reset credentials and generate new client credentials for the impacted application or integration to mitigate the risk.
