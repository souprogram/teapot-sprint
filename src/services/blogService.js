const API_URL = 'http://localhost:3001/api/blogs';

export async function getBlogs() {
  const res = await fetch(API_URL)
  if(!res.ok) {
    throw new Error('Greška pri dohvaćanju blogova');
  }
  return await res.json();
}
export async function getBlog(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if(!res.ok) {
    throw new Error('Greška pri dohvaćanju objava');
  }
  return await res.json();
}
export async function createBlog(naslov, content, image=null) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ naslov, content, image }),
  });
  if(!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Greška kod dodavanja objave');
  }
  return await res.json();
}
export async function deleteBlog(id, userEmail) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'x-user-email': userEmail
    },
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Greška kod brisanja objave');
  }
  return await res.json();
}