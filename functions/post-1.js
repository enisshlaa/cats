exports.handler = async event => {
  if (event.queryStringParameters.fbclid) {
    return {
      statusCode: 301,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
        location: 'https://viralonce.xyz/four-cats-were-saved-from-a-burning-fishing-boat-by-thai-navy-sailors-after-a-fire-broke-out-on-board/'
      }
    }
  } else {
    let pathName = event.path.split('/')[3].split('-')
    return {
      statusCode: 301,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
        location: process.env.URL + '/' + pathName[0] + '-' + pathName[1] + '/'
      }
    }
  }
}
