import CustomSwal from './CustomSwal';
import services from '../json/services.json';

export default function InterventionForm() {
    CustomSwal.fire({
        title: 'Demande d\'intervention',
        html: <form id="form" class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col">
                <label className='text-left' for="name">Nom et Prénom</label>
                <input type="text" name="name" id="name" class="border border-gray-300 rounded-lg px-4 py-3" />
            </div>
            <div className="flex flex-col">
                <label className='text-left' for="email">Email</label>
                <input type="email" name="email" id="email" class="border border-gray-300 rounded-lg px-4 py-3" />
            </div>
            <div className="flex flex-col">
                <label className='text-left' for="phone">Téléphone</label>
                <input type="number" name="phone" id="phone" class="border border-gray-300 rounded-lg px-4 py-3" />
            </div>
            <div className="flex flex-col">
                <label className='text-left' for="address">Adresse</label>
                <input type="text" name="address" id="address" class="border border-gray-300 rounded-lg px-4 py-3" />
            </div>
            <div className="flex flex-col">
                <label className='text-left' for="city">Ville</label>
                <input type="text" name="city" id="city" class="border border-gray-300 rounded-lg px-4 py-3" />
            </div>
            <div className="flex flex-col">
                <label className='text-left' for="zip">Code postal</label>
                <input type="number" name="zip" id="zip" class="border border-gray-300 rounded-lg px-4 py-3" />
            </div>
            <div className="flex flex-col">
                <label className='text-left' for="type">Type d'intervention</label>
                <select name="type" id="type" class="border border-gray-300 rounded-lg px-4 py-3">
                    {services.map((service) => {
                        return <option key={`askFor_${service}`} value={service.slug}>{service.name}</option>

                    })}
                </select>
            </div>
            <div className="flex flex-col">
                <label className='text-left' for="message">Message</label>
                <textarea name="message" id="message" class="border border-gray-300 rounded-lg px-4 py-3"></textarea>
            </div>
        </form>,
        showCancelButton: true,
        confirmButtonColor: '#166534',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Envoyer',
        cancelButtonText: 'Annuler',
        width: '850px',
        preConfirm: () => {
            const name = CustomSwal.getPopup().querySelector('#name').value
            const email = CustomSwal.getPopup().querySelector('#email').value
            const phone = CustomSwal.getPopup().querySelector('#phone').value
            const address = CustomSwal.getPopup().querySelector('#address').value
            const city = CustomSwal.getPopup().querySelector('#city').value
            const zip = CustomSwal.getPopup().querySelector('#zip').value
            const type = CustomSwal.getPopup().querySelector('#type').value
            const message = CustomSwal.getPopup().querySelector('#message').value

            if (!name || !email || !phone || !address || !city || !zip || !type || !message) {
                CustomSwal.showValidationMessage(`Veuillez remplir tous les champs`)
            }
            return { email, phone, address, city, zip, message }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            CustomSwal.fire({
                title: 'Demande envoyée',
                text: 'Votre demande a bien été envoyée, nous vous contacterons dans les plus brefs délais',
                icon: 'success',
                confirmButtonText: 'Merci !',
                confirmButtonColor: '#166534',
            })
        }
    })
}