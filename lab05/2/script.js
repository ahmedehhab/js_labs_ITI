const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const name = urlParams.get('name');
const address = urlParams.get('address');
const gender = urlParams.get('gender');
const mobile = urlParams.get('mobile');

document.body.innerHTML = `
    <h1>User Information</h1>
    <p><strong>Name:</strong> ${name ? name : 'N/A'}</p>
    <p><strong>Address:</strong> ${address ? address : 'N/A'}</p>
    <p><strong>Gender:</strong> ${gender ? gender : 'N/A'}</p>
    <p><strong>Mobile:</strong> ${mobile ? mobile : 'N/A'}</p>
`;