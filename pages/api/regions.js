// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { availableRegions, availableDepartments } from '../../components/init';
import regions from '../../json/regions.json';

export default async function handler(req, res) {
  return res.status(200).json(regions ?? []);
}