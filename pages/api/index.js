export default async function handler(req, res) {
  // const data = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     service_id: 'service_u03iw3b',
  //     template_id: 'template_kmptgzt',
  //     user_id: 'x2BX9vJ0llvcpx_Yd',
  //     accessToken: 'qwXFhdbHm0rpIm2AKt18x',
  //     template_params: {
  //       'from_name': 'test',
  //       'to_name': 'test',
  //       'message_html': 'test',
  //     }
  //   })
  // }).then(console.log);

  return res.status(200).json("Mais c'est super ça !");
}