export type ErrorInfo = {
  code: number
  title: string
  description: string
}

export const errors: ErrorInfo[] = [
  {
    code: 400,
    title: 'Bad Request',
    description: 'The server could not understand the request due to invalid syntax.',
  },
  {
    code: 401,
    title: 'Unauthorized',
    description: 'You must authenticate yourself to get the requested response.',
  },
  {
    code: 403,
    title: 'Forbidden',
    description: 'You do not have access rights to the content.',
  },
  {
    code: 404,
    title: 'Not Found',
    description: 'The server can not find the requested resource.',
  },
  {
    code: 405,
    title: 'Method Not Allowed',
    description: 'The request method is known by the server but is not supported by the target resource.',
  },
  {
    code: 408,
    title: 'Request Timeout',
    description: 'The server timed out waiting for the request.',
  },
  {
    code: 409,
    title: 'Conflict',
    description: 'The request could not be completed due to a conflict with the current state of the resource.',
  },
  {
    code: 410,
    title: 'Gone',
    description: 'The requested resource is no longer available and will not be available again.',
  },
  {
    code: 415,
    title: 'Unsupported Media Type',
    description: 'The request entity has a media type which the server or resource does not support.',
  },
  {
    code: 429,
    title: 'Too Many Requests',
    description: 'The user has sent too many requests in a given amount of time ("rate limiting").',
  },
  {
    code: 500,
    title: 'Internal Server Error',
    description: 'The server has encountered a situation it doesn\'t know how to handle.',
  },
  {
    code: 502,
    title: 'Bad Gateway',
    description: 'The server was acting as a gateway or proxy and received an invalid response.',
  },
  {
    code: 503,
    title: 'Service Unavailable',
    description: 'The server is not ready to handle the request.',
  },
  {
    code: 504,
    title: 'Gateway Timeout',
    description: 'The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.',
  },
]