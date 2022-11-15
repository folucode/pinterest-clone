import { getXataClient } from '../../src/xata';
const xata = getXataClient();

const handler = async (req, res) => {
  const { title, description, destination_link, image_url } = req.body;

  await xata.db.pins.create({
    title,
    description,
    destination_link,
    image_url,
  });

  res.end();
};

export default handler;
