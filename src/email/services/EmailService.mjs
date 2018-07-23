
export async function getEmails() {
  const page = await call('/data/emails.json');
  return page.collection.items;
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
