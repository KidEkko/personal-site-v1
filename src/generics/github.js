export function SendGithubAPIRequest(url) {
  return fetch(url).then(resp => {
    if (!resp.ok) {
      throw new Error('Network response was not ok');
    }
    return resp.json();
  })
}

export function SendGithubAPIRequestWithToken(url, token) {  
  return fetch(url, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  }).then((resp) => {
    if (!resp.ok) {
      throw new Error("Network response was not ok");
    }
    return resp.json();
  });
}
