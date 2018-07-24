
export async function getEmails() {
  const result = await call('/data/emails.json');
  const emails = result.collection.items.reduce((map, email) => {
    map.set(email.id, email);
    return map;
  }, new Map());

  return emails;
}


export async function getEmailById(id) {
  return call(`/data/email-${id}.json`);
}


async function call(url, options) {
  const response = await fetch(url, {
    credentials: 'include',
    ...options
  });

  if (!response.ok) throw new Error(response.status);

  return response.json();
}
