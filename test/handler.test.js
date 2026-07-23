const { describe, expect, test } = require('bun:test')
const { handleRequest } = require('../src/handler')

function request(path, method = 'GET') {
  const headers = new Map()
  let body = ''
  const response = {
    statusCode: 200,
    setHeader(name, value) {
      headers.set(name.toLowerCase(), value)
    },
    end(chunk = '') {
      body += chunk
    },
  }

  handleRequest({ method, url: path }, response)

  return {
    body: body ? JSON.parse(body) : null,
    headers,
    status: response.statusCode,
  }
}

describe('Calmpaper demo API', () => {
  test('reports healthy demo mode', () => {
    const response = request('/api/health')
    expect(response.status).toBe(200)
    expect(response.body).toMatchObject({ ok: true, mode: 'demo' })
    expect(response.headers.get('x-content-type-options')).toBe('nosniff')
  })

  test('returns books with author and comments', () => {
    const response = request('/api/books/frankenstein')
    expect(response.status).toBe(200)
    expect(response.body.title).toBe('Frankenstein')
    expect(response.body.author.name).toBe('Mary Shelley')
    expect(response.body.comments.length).toBeGreaterThan(0)
  })

  test('returns a useful 404', () => {
    const response = request('/api/books/not-a-book')
    expect(response.status).toBe(404)
    expect(response.body.error).toBe('book_not_found')
  })

  test('rejects mutations in public demo mode', () => {
    const response = request('/api/books', 'POST')
    expect(response.status).toBe(405)
    expect(response.body.error).toBe('method_not_allowed')
  })
})
