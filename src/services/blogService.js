const API_URL = `${import.meta.env.VITE_API_URL}/api/blogs`;

export async function getBlogs() {
  try {
    const res = await fetch(API_URL)
    if(!res.ok) {
      throw new Error('Greška pri dohvaćanju blogova');
    }
    return await res.json();
  }
  catch (err) {
    console.error(err);
  }
}
export async function getBlog(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`);
    if(!res.ok) {
      throw new Error('Greška pri dohvaćanju objava');
    }
    return await res.json();
  }
  catch (err) {
    console.error(err);
  }
}
export async function createBlog(naslov, content, image=null) {
  try {
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
  catch (err) {
    console.error(err);
  }
}
export async function deleteBlog(id, userEmail) {
  try {
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
  catch(err) {
    console.error(err)
  }
}