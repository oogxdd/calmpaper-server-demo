const { authors, books, comments, feed } = require('./demo-data')

const apiVersion = '2026-07-23'

function sendJson(response, statusCode, body) {
  response.statusCode = statusCode
  response.setHeader('Content-Type', 'application/json; charset=utf-8')
  response.end(JSON.stringify(body))
}

function withRelations(book) {
  if (!book) return undefined
  return {
    ...book,
    author: authors.find((author) => author.slug === book.authorSlug),
    comments: comments.filter((comment) => comment.bookSlug === book.slug),
  }
}

function handleRequest(request, response) {
  const allowedOrigin = process.env.DEMO_ALLOWED_ORIGIN || '*'
  response.setHeader('Access-Control-Allow-Origin', allowedOrigin)
  response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  response.setHeader('Cache-Control', 'public, max-age=60, s-maxage=300')
  response.setHeader('Referrer-Policy', 'no-referrer')
  response.setHeader('X-Content-Type-Options', 'nosniff')

  if (request.method === 'OPTIONS') {
    response.statusCode = 204
    response.end()
    return
  }

  if (request.method !== 'GET') {
    sendJson(response, 405, {
      error: 'method_not_allowed',
      message: 'The public demo API is read-only.',
    })
    return
  }

  const url = new URL(request.url || '/', 'http://calmpaper.local')
  const path = url.pathname.replace(/\/+$/, '') || '/'

  if (path === '/' || path === '/api') {
    sendJson(response, 200, {
      name: 'Calmpaper demo API',
      mode: 'read-only-demo',
      version: apiVersion,
      endpoints: [
        '/api/health',
        '/api/demo',
        '/api/books',
        '/api/books/:slug',
        '/api/authors',
        '/api/authors/:slug',
        '/api/feed',
      ],
    })
    return
  }

  if (path === '/api/health') {
    sendJson(response, 200, {
      ok: true,
      mode: 'demo',
      version: apiVersion,
    })
    return
  }

  if (path === '/api/demo') {
    sendJson(response, 200, {
      meta: {
        mode: 'read-only-demo',
        note: 'Conversations and preview passages are fictional sample content.',
      },
      authors,
      books: books.map(withRelations),
      feed,
    })
    return
  }

  if (path === '/api/books') {
    sendJson(response, 200, {
      items: books.map(withRelations),
      total: books.length,
    })
    return
  }

  if (path.startsWith('/api/books/')) {
    const slug = decodeURIComponent(path.slice('/api/books/'.length))
    const book = withRelations(books.find((item) => item.slug === slug))
    if (!book) {
      sendJson(response, 404, {
        error: 'book_not_found',
        message: `No demo book found for “${slug}”.`,
      })
      return
    }
    sendJson(response, 200, book)
    return
  }

  if (path === '/api/authors') {
    sendJson(response, 200, {
      items: authors,
      total: authors.length,
    })
    return
  }

  if (path.startsWith('/api/authors/')) {
    const slug = decodeURIComponent(path.slice('/api/authors/'.length))
    const author = authors.find((item) => item.slug === slug)
    if (!author) {
      sendJson(response, 404, {
        error: 'author_not_found',
        message: `No demo author found for “${slug}”.`,
      })
      return
    }
    sendJson(response, 200, {
      ...author,
      books: books.filter((book) => book.authorSlug === author.slug),
    })
    return
  }

  if (path === '/api/feed') {
    sendJson(response, 200, {
      items: feed,
      total: feed.length,
    })
    return
  }

  sendJson(response, 404, {
    error: 'not_found',
    message: 'That demo API route does not exist.',
  })
}

module.exports = {
  handleRequest,
}
