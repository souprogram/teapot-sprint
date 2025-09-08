const API_URL_B = 'http://localhost:3001/api/timovi';

export async function getTimovi() {
  const res = await fetch(API_URL_B);
  return await res.json();
}

export async function getTim(id) {
  const res = await fetch(`${API_URL_B}/${id}`);
  return await res.json();
}
export async function updateBodovi(id, bodovi) {
  const res = await fetch(`${API_URL_B}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ bodovi }),
  });
  return await res.json();
}
export async function createTim(name, natjecatelj_id) {
  const res = await fetch(API_URL_B, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, natjecatelj_id }),
  });
  return await res.json();
}
export async function deleteTim(id) {
  const res = await fetch(`${API_URL_B}/${id}`, {
    method: 'DELETE',
  });
  return res.ok;
}