var request = require('request');



const requests = (url,methot) =>  new Promise((resolve, reject) => {
    
    var options = {
        'method': methot,
        'url': url,
        // 'url': 'https://iptvcat.com/turkey_-_-_-_-_-_-_-_-_-_-_-_-_-_-',
        'headers': {
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
          'Accept-Language': 'tr,en;q=0.9,en-GB;q=0.8,en-US;q=0.7',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
          'Pragma': 'no-cache',
          'Referer': url,
          'Sec-Fetch-Dest': 'document',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Fetch-User': '?1',
          'Upgrade-Insecure-Requests': '1',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.56',
          'sec-ch-ua': '"Microsoft Edge";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"'
        }
      };
      request(options, function (error, response) {
        if (error) throw new Error(reject(error));
        // console.log(response.body);
        resolve (response.body)
      });
});
    


// module.exports = { replaceStr }
// or
exports.requests = requests


// const requests = async(url,methot) => {
//     var options = {
//         'method': methot,
//         'url': 'https://iptvcat.com/turkey_-_-_-_-_-_-_-_-_-_-_-_-_-_-',
//         'headers': {
//           'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
//           'Accept-Language': 'tr,en;q=0.9,en-GB;q=0.8,en-US;q=0.7',
//           'Cache-Control': 'no-cache',
//           'Connection': 'keep-alive',
//           'Pragma': 'no-cache',
//           'Referer': 'https://iptvcat.com/turkey_-_-_-_-_-_-_-_-_-_-_-_-_-_-/s/bein_-_-_-_',
//           'Sec-Fetch-Dest': 'document',
//           'Sec-Fetch-Mode': 'navigate',
//           'Sec-Fetch-Site': 'same-origin',
//           'Sec-Fetch-User': '?1',
//           'Upgrade-Insecure-Requests': '1',
//           'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.56',
//           'sec-ch-ua': '"Microsoft Edge";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
//           'sec-ch-ua-mobile': '?0',
//           'sec-ch-ua-platform': '"Windows"'
//         }
//       };
//       request(options, function (error, response) {
//         if (error) throw new Error(error);
//         console.log(response.body);
//         return response.body
//       });
    
// }

// // module.exports = { replaceStr }
// // or
// exports.requests = requests