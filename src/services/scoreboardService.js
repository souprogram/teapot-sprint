const API_URL_B = `${import.meta.env.VITE_API_URL}/api/timovi`;

export async function getTimovi() {
  try {
    const res = await fetch(API_URL_B);
    return await res.json();
  }
  catch (err) {
    console.error(err);
  }
}
export async function getTim(id) {
  try {
    const res = await fetch(`${API_URL_B}/${id}`);
    return await res.json();
  }
  catch (err) {
    console.error(err);
  }
}
export async function updateBodovi(id, bodovi) {
  try {
    const res = await fetch(`${API_URL_B}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ bodovi }),
    });
    return await res.json();
  }
  catch (err) {
    console.error(err);
  }
}
export async function createTim(name, natjecatelj_id) {
  try {
    const res = await fetch(API_URL_B, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, natjecatelj_id }),
    });
    return await res.json();
  }
  catch (err) {
    console.error(err);
  }
}
export async function deleteTim(id) {
  try {
    const res = await fetch(`${API_URL_B}/${id}`, {
      method: 'DELETE',
    });
    return res.ok;
  }
  catch (err) {
    console.error(err);
  }
}