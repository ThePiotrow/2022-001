// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { availableRegions, availableDepartments } from '../../components/init';
import departments from '../../json/departments-final.json';
import cities from '../../json/cities-final.json';

export default async function handler(req, res) {
    const departements = departments.filter((department) =>
        availableRegions.includes(department.region_code) || availableDepartments.includes(department.department_code)
    );

    for (let department of departements) {
        if (!req.query.hasOwnProperty('short'))
            department.cities = cities.filter(function (city) { return city.department_code === department.code });
        else
            department.cities = [cities.find(function (city) { return city.department_code === department.code })];
    }
    return res.status(200).json(departements ?? []);

}