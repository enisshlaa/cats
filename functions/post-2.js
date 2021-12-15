exports.handler = async event => {
  if (event.queryStringParameters.fbclid) {
    return {
      statusCode: 301,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
        location: 'https://viralonce.xyz/when-a-strangers-cat-was-diagnosed-with-an-incurable-condition-reddit-users-rallied-behind-her-to-donate-the-money-she-needed-to-preserve-her-pet/'
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
