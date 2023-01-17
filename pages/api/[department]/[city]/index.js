// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { availableRegions, availableDepartments } from '../../../../components/init';
import departments from '../../../../json/departments-final.json';
import cities from '../../../../json/cities-final.json';

export default async function handler(req, res) {
    const department = departments.find(function (department) { return department.slug === req.query.department && (availableRegions.includes(department.region_code)) });

    let city = cities.find(function (city) { return city.department_code === department.code && city.slug === req.query.city });

    // const styles = [
    //     'thepiotrow/clbjootsb000x14p187hxu9pj',
    //     'thepiotrow/clcl2jqbg001o14t2v8due4rp',
    //     'thepiotrow/clcl2rxu8002g15mur0gldpyn',
    //     'thepiotrow/clbiq01go000t14n24d36r87e'
    // ];

    // const [url, style, lng, lat, zoom, bearing, pitch, width, height, ratio] = [
    //     'https://api.mapbox.com/styles/v1',
    //     'thepiotrow/clbjootsb000x14p187hxu9pj/static',
    //     Number(city.gps_lng), Number(city.gps_lat) - 0.008, 12, 0, 60, 1280, 800, '@2x'
    // ];

    // styles.map(async (style) => {
    //     console.log(`${url}/${style}/static/${lng},${lat},${zoom},${bearing},${pitch}/${width}x${height}${ratio}?access_token=pk.eyJ1IjoidGhlcGlvdHJvdyIsImEiOiJjbGJpb3V1aGUwaHcxM3htbHo5MTgyeDlyIn0.0IPrcAlSv_dajoimf1ud1g`)
    // });

    return res.status(200).json(city ?? []);
}