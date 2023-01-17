import services from '../../../json/services.json'

export default async function handler(req, res) {
    res.status(200).json(services ?? []);
}