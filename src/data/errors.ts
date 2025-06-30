export type ErrorInfo = {
  code: number;
  title: string;
  description: string;
  category: "Client Error" | "Server Error" | "Other";
};

export const errors: ErrorInfo[] = [
  {
    code: 301,
    title: "Moved Permanently",
    description:
      "The requested resource has been assigned a new permanent URI.",
    category: "Other",
  },
  {
    code: 302,
    title: "Found",
    description:
      "The requested resource resides temporarily under a different URI.",
    category: "Other",
  },
  {
    code: 307,
    title: "Temporary Redirect",
    description:
      "The requested resource resides temporarily under a different URI and the client should use the original URI for future requests.",
    category: "Other",
  },
  {
    code: 400,
    title: "Bad Request",
    description:
      "The server could not understand the request due to invalid syntax.",
    category: "Client Error",
  },
  {
    code: 401,
    title: "Unauthorized",
    description:
      "You must authenticate yourself to get the requested response.",
    category: "Client Error",
  },
  {
    code: 403,
    title: "Forbidden",
    description: "You do not have access rights to the content.",
    category: "Client Error",
  },
  {
    code: 404,
    title: "Not Found",
    description: "The server can not find the requested resource.",
    category: "Client Error",
  },
  {
    code: 405,
    title: "Method Not Allowed",
    description:
      "The request method is known by the server but is not supported by the target resource.",
    category: "Client Error",
  },
  {
    code: 408,
    title: "Request Timeout",
    description: "The server timed out waiting for the request.",
    category: "Client Error",
  },
  {
    code: 409,
    title: "Conflict",
    description:
      "The request could not be completed due to a conflict with the current state of the resource.",
    category: "Client Error",
  },
  {
    code: 410,
    title: "Gone",
    description:
      "The requested resource is no longer available and will not be available again.",
    category: "Client Error",
  },
  {
    code: 415,
    title: "Unsupported Media Type",
    description:
      "The request entity has a media type which the server or resource does not support.",
    category: "Client Error",
  },
  {
    code: 429,
    title: "Too Many Requests",
    description:
      'The user has sent too many requests in a given amount of time ("rate limiting").',
    category: "Client Error",
  },
  {
    code: 500,
    title: "Internal Server Error",
    description:
      "The server has encountered a situation it doesn't know how to handle.",
    category: "Server Error",
  },
  {
    code: 502,
    title: "Bad Gateway",
    description:
      "The server was acting as a gateway or proxy and received an invalid response.",
    category: "Server Error",
  },
  {
    code: 503,
    title: "Service Unavailable",
    description: "The server is not ready to handle the request.",
    category: "Server Error",
  },
  {
    code: 504,
    title: "Gateway Timeout",
    description:
      "The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.",
    category: "Server Error",
  },
];
