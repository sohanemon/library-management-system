import connect from "../../lib/connect-db";
import bookModel from "../../model/book-schema";
/**
 *
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
  await connect();
  try {
    switch (req.method) {
      case "GET":
        const data = await bookModel.find({});
        res.json(data);
        break;
      case "POST":
        await res.json(bookModel.create(JSON.parse(req.body)));
        console.log(req.body, "I am here");

        break;
      case "DELETE":
        await bookModel.findByIdAndDelete({ _id: "" });
        res.json({ ok: "ok" });
        console.log();
        // res.json(req.params);
        break;
    }
  } catch (error) {
    console.log(error);
  }
}
