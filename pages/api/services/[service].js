import services from '../../../json/services.json'

export default async function handler(req, res) {
    const service = services.find(function (service) { return service.slug === req.query.service });
    
    return res.status(200).json(service ?? []);
}