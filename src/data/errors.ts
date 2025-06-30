export type ErrorInfo = {
  code: number;
  title: string;
  description: string;
  category: "Client Error" | "Server Error" | "Other";
  example?: string;
};

export const errors: ErrorInfo[] = [
  {
    code: 301,
    title: "Moved Permanently",
    description: "The requested resource has been assigned a new permanent URI.",
    category: "Other",
    example: `GET /old-page HTTP/1.1
Host: example.com

HTTP/1.1 301 Moved Permanently
Location: /new-page
Content-Length: 0`
  },
  {
    code: 302,
    title: "Found",
    description: "The requested resource resides temporarily under a different URI.",
    category: "Other",
    example: `GET /temp-page HTTP/1.1
Host: example.com

HTTP/1.1 302 Found
Location: /another-page
Content-Length: 0`
  },
  {
    code: 307,
    title: "Temporary Redirect",
    description: "The requested resource resides temporarily under a different URI and the client should use the original URI for future requests.",
    category: "Other",
    example: `POST /submit-form HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 27

name=John&email=john@example.com

HTTP/1.1 307 Temporary Redirect
Location: /form-redirect
Content-Length: 0`
  },
  {
    code: 400,
    title: "Bad Request",
    description: "The server could not understand the request due to invalid syntax.",
    category: "Client Error",
    example: `GET /api/items?limit=abc HTTP/1.1
Host: example.com

HTTP/1.1 400 Bad Request
Content-Type: application/json; charset=utf-8
Content-Length: 52

{
  "error": "Invalid 'limit' parameter, must be a number"
}`
  },
  {
    code: 401,
    title: "Unauthorized",
    description: "You must authenticate yourself to get the requested response.",
    category: "Client Error",
    example: `GET /user/profile HTTP/1.1
Host: example.com

HTTP/1.1 401 Unauthorized
WWW-Authenticate: Basic realm="Access to the site"
Content-Length: 0`
  },
  {
    code: 403,
    title: "Forbidden",
    description: "You do not have access rights to the content.",
    category: "Client Error",
    example: `GET /admin HTTP/1.1
Host: example.com

HTTP/1.1 403 Forbidden
Content-Type: text/html; charset=utf-8
Content-Length: 23

<html>Access Denied</html>`
  },
  {
    code: 404,
    title: "Not Found",
    description: "The server can not find the requested resource.",
    category: "Client Error",
    example: `GET /not-a-real-page HTTP/1.1
Host: example.com

HTTP/1.1 404 Not Found
Content-Type: text/html; charset=utf-8
Content-Length: 22

<html>Not Found</html>`
  },
  {
    code: 405,
    title: "Method Not Allowed",
    description: "The request method is known by the server but is not supported by the target resource.",
    category: "Client Error",
    example: `POST /readonly-resource HTTP/1.1
Host: example.com

HTTP/1.1 405 Method Not Allowed
Allow: GET, HEAD
Content-Length: 0`
  },
  {
    code: 408,
    title: "Request Timeout",
    description: "The server timed out waiting for the request.",
    category: "Client Error",
    example: `GET /slow-endpoint HTTP/1.1
Host: example.com

HTTP/1.1 408 Request Timeout
Content-Length: 0`
  },
  {
    code: 409,
    title: "Conflict",
    description: "The request could not be completed due to a conflict with the current state of the resource.",
    category: "Client Error",
    example: `PUT /document/123 HTTP/1.1
Host: example.com
Content-Type: application/json
Content-Length: 38

{"id":123,"version":2,"content":"new"}

HTTP/1.1 409 Conflict
Content-Type: application/json; charset=utf-8
Content-Length: 49

{
  "error": "Document version conflict detected"
}`
  },
  {
    code: 410,
    title: "Gone",
    description: "The requested resource is no longer available and will not be available again.",
    category: "Client Error",
    example: `GET /removed-page HTTP/1.1
Host: example.com

HTTP/1.1 410 Gone
Content-Type: text/html; charset=utf-8
Content-Length: 19

<html>Gone</html>`
  },
  {
    code: 415,
    title: "Unsupported Media Type",
    description: "The request entity has a media type which the server or resource does not support.",
    category: "Client Error",
    example: `POST /upload HTTP/1.1
Host: example.com
Content-Type: application/xml
Content-Length: 23

<data>...</data>

HTTP/1.1 415 Unsupported Media Type
Content-Type: application/json; charset=utf-8
Content-Length: 44

{
  "error": "Only application/json is supported"
}`
  },
  {
    code: 429,
    title: "Too Many Requests",
    description: 'The user has sent too many requests in a given amount of time ("rate limiting").',
    category: "Client Error",
    example: `GET /api/data HTTP/1.1
Host: example.com

HTTP/1.1 429 Too Many Requests
Retry-After: 60
Content-Length: 0`
  },
  {
    code: 500,
    title: "Internal Server Error",
    description: "The server has encountered a situation it doesn't know how to handle.",
    category: "Server Error",
    example: `GET /cause-error HTTP/1.1
Host: example.com

HTTP/1.1 500 Internal Server Error
Content-Type: text/html; charset=utf-8
Content-Length: 31

<html>Internal Server Error</html>`
  },
  {
    code: 502,
    title: "Bad Gateway",
    description: "The server was acting as a gateway or proxy and received an invalid response.",
    category: "Server Error",
    example: `GET /proxy-endpoint HTTP/1.1
Host: example.com

HTTP/1.1 502 Bad Gateway
Content-Type: text/html; charset=utf-8
Content-Length: 23

<html>Bad Gateway</html>`
  },
  {
    code: 503,
    title: "Service Unavailable",
    description: "The server is not ready to handle the request.",
    category: "Server Error",
    example: `GET /maintenance HTTP/1.1
Host: example.com

HTTP/1.1 503 Service Unavailable
Retry-After: 120
Content-Type: text/html; charset=utf-8
Content-Length: 28

<html>Service Unavailable</html>`
  },
  {
    code: 504,
    title: "Gateway Timeout",
    description: "The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.",
    category: "Server Error",
    example: `GET /proxy-slow HTTP/1.1
Host: example.com

HTTP/1.1 504 Gateway Timeout
Content-Type: text/html; charset=utf-8
Content-Length: 26

<html>Gateway Timeout</html>`
  }
];