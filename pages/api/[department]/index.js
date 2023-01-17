// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { availableRegions, availableDepartments } from '../../../components/init';
import departments from '../../../json/departments-final.json';
import cities from '../../../json/cities-final.json';
import fs from 'fs';

export default async function handler(req, res) {
    const department = departments.find(function (department) { return department.slug === req.query.department && (availableRegions.includes(department.region_code)) });

    let seen = new Set();

    department.cities = cities.filter(function (city, i, acc) { if (city.department_code === department.code) if (!seen.has(city.slug)) { seen.add(city.slug); return true; } return false; });

    let counter = 0;

    for (let city of department.cities) {
        counter++;

        //thumbail
        // 400 / 210
        //full
        // 1280 / 800

        const [url, style, lng, lat, zoom, bearing, pitch, ratio] = [
            'https://api.mapbox.com/styles/v1',
            'thepiotrow/clbjootsb000x14p187hxu9pj/static',
            Number(city.gps_lng), Number(city.gps_lat) - 0.008, 15, 0, 60, '@2x'];

        if (!fs.existsSync(`./public/images/${department.slug}_${city.slug}.png`)) {
            console.log(`---------------------------------------------------\r\n${department.name} ${city.name} en cours de téléchargement...`)


            const full = await fetch(`${url}/${style}/${lng},${lat},${zoom},${bearing},${pitch}/${1280}x${800}${ratio}?access_token=pk.eyJ1IjoidGhlcGlvdHJvdyIsImEiOiJjbGJpb3V1aGUwaHcxM3htbHo5MTgyeDlyIn0.0IPrcAlSv_dajoimf1ud1g`)
                .then(res => res.buffer())
                .then(buffer => {
                    fs.writeFile(`./public/images/${department.slug}_${city.slug}.png`, buffer, () => console.log(`---------------------------------------------------\r\n${department.name} ${city.name} Full téléchargé !\r\n---------------------------------------------------`));
                })
                .catch(err => {
                    console.log(err);
                });


            const thumbail = await fetch(`${url}/${style}/${lng},${lat},${zoom},${bearing},${pitch}/${width}x${height}${ratio}?access_token=pk.eyJ1IjoidGhlcGlvdHJvdyIsImEiOiJjbGJpb3V1aGUwaHcxM3htbHo5MTgyeDlyIn0.0IPrcAlSv_dajoimf1ud1g`)
                .then(res => res.buffer())
                .then(buffer => {
                    fs.writeFile(`./public/images/${department.slug}_${city.slug}_thumbnail.png`, buffer, () => console.log(`---------------------------------------------------\r\n${department.name} ${city.name} Miniature téléchargé !\r\n---------------------------------------------------`));
                })
                .catch(err => {
                    console.log(err);
                });

            console.log(`${url}/${style}/${lng},${lat},${zoom},${bearing},${pitch}/${width}x${height}${ratio}?access_token=pk.eyJ1IjoidGhlcGlvdHJvdyIsImEiOiJjbGJpb3V1aGUwaHcxM3htbHo5MTgyeDlyIn0.0IPrcAlSv_dajoimf1ud1g`)

            console.log(`\r\n${counter}/${department.cities.length}\r\n---------------------------------------------------\r\n`);
        }

    }

    return res.status(200).json(department ?? []);
}