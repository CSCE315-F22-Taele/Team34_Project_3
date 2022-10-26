// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const resObj = {};
  for (var a = 1; a < 10; a++)
    resObj[a] = a;
  res.status(200).json(resObj);
}
