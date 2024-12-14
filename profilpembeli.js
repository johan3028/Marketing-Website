const profileData = [
    { 
        name: 'Ilham', 
        status: 'bought', 
        image: 'ilham.jpg', 
        info: 'Email: ilham@gmail.com, Phone: +6283254678342' 
    },
    { 
        name: 'Rahmat', 
        status: 'shipped', 
        image: 'rahmat.jpg', 
        info: 'Email: Rahmat@gmail.com, Phone: +6281209346575' 
    },
    { 
        name: 'Ambatukam', 
        status: 'cancelled', 
        image: 'rusdi.jpg', 
        info: 'Email: ambatukam@gmail.com, Phone: +6281927346235' 
    },
    { 
        name: 'Fikri', 
        status: 'bought', 
        image: 'ambatukam.jpg', 
        info: 'Email: fikri@gmail.com, Phone: +628192345678' 
    },
];

const statusClasses = {
    bought: 'status-bought',
    shipped: 'status-shipped',
    cancelled: 'status-cancelled'
};

const statusLabels = {
    bought: 'Sudah Membeli',
    shipped: 'Terkirim',
    cancelled: 'Dibatalkan'
};

const profileContainer = document.getElementById('profile');

profileData.forEach(profile => {
    const profileItem = document.createElement('div');
    profileItem.className = 'profile-item';

    const imgElement = document.createElement('img');
    imgElement.src = profile.image;
    imgElement.alt = profile.name;

    const detailsElement = document.createElement('div');
    detailsElement.className = 'profile-details';

    const nameElement = document.createElement('div');
    nameElement.className = 'name';
    nameElement.textContent = profile.name;

    const infoElement = document.createElement('div');
    infoElement.className = 'info';
    infoElement.textContent = profile.info;

    detailsElement.appendChild(nameElement);
    detailsElement.appendChild(infoElement);

    const statusElement = document.createElement('div');
    statusElement.className = `status ${statusClasses[profile.status]}`;
    statusElement.textContent = statusLabels[profile.status];

    profileItem.appendChild(imgElement);
    profileItem.appendChild(detailsElement);
    profileItem.appendChild(statusElement);

    profileContainer.appendChild(profileItem);
});