const endpoints = [
  'https://nytalent.com.sg/',
  'http://nytalent.com.sg/',
  'https://www.nytalent.com.sg/',
  'http://www.nytalent.com.sg/'
];

async function checkEndpoint(url) {
  try {
    const res = await fetch(url, {
      method: 'HEAD',
      redirect: 'manual',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Nanyang-Talent-Checker/1.0'
      }
    });
    console.log(`[Domain Check] ${url} -> Status: ${res.status}, Location: ${res.headers.get('location') || '(none)'}`);
    return { url, status: res.status, location: res.headers.get('location') };
  } catch (err) {
    console.log(`[Domain Check] ${url} -> Error: ${err.message}`);
    return { url, error: err.message };
  }
}

async function main() {
  console.log('Testing live domain network status and redirect behavior for nytalent.com.sg...\n');
  for (const ep of endpoints) {
    await checkEndpoint(ep);
  }
}

main();
